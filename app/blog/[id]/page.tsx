import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { ArticleSchema } from '@/components/schema/ArticleSchema';
import { PageSchemas } from '@/components/schema/PageSchemas';
import { SocialShare } from '@/components/ui/SocialShare';
import { calculateReadingTime, formatReadingTime } from '@/lib/utils/readingTime';

type Props = {
  params: Promise<{ id: string }>;
};

const blogPosts: Record<string, {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  content: string;
}> = {
  '1': {
    id: '1',
    title: '10 Things to Know Before Buying a Home in Las Vegas',
    excerpt: 'Essential tips for first-time and experienced buyers navigating the Las Vegas real estate market.',
    image: '/placeholder-blog.jpg',
    date: 'December 20, 2024',
    category: 'Buying',
    content: `Buying a home in Las Vegas can be an exciting journey, but it's important to be well-prepared. Here are 10 essential things every buyer should know:

1. **Market Research is Key**: The Las Vegas real estate market is dynamic. Prices can vary significantly by neighborhood, so thorough research is essential.

2. **Get Pre-Approved**: Before you start house hunting, get pre-approved for a mortgage. This shows sellers you're serious and helps you understand your budget.

3. **Understand HOA Fees**: Many Las Vegas communities have Homeowners Associations (HOAs). Make sure you understand the monthly fees and what they cover.

4. **Consider the Climate**: Las Vegas has a desert climate with hot summers. Consider energy-efficient homes and landscaping that can handle the heat.

5. **School Districts Matter**: Even if you don't have children, good school districts can significantly impact property values.

6. **Water Rights and Utilities**: Understand water rights and utility costs, which can be higher in desert climates.

7. **Property Taxes**: Nevada has relatively low property taxes, but it's still important to factor them into your budget.

8. **Home Inspections**: Always get a professional home inspection, especially for older properties or homes with pools.

9. **Work with a Local Expert**: A knowledgeable local real estate agent can help you navigate the market and find the best deals.

10. **Be Patient**: The right home is out there. Don't rush into a decision you might regret later.`,
  },
  '2': {
    id: '2',
    title: 'How to Stage Your Home for a Quick Sale',
    excerpt: 'Professional staging tips that can help your home sell faster and for a higher price.',
    image: '/placeholder-blog.jpg',
    date: 'December 18, 2024',
    category: 'Selling',
    content: `Staging your home effectively can make the difference between a quick sale and a property that sits on the market. Here's how to stage your Las Vegas home for success:

**Declutter and Depersonalize**: Remove personal items and excess clutter. Buyers need to envision themselves living in the space.

**Maximize Curb Appeal**: First impressions matter. Ensure your landscaping is well-maintained, paint is fresh, and the entryway is welcoming.

**Lighting is Everything**: Open all curtains and blinds. Add extra lighting where needed. Bright, airy spaces feel larger and more inviting.

**Neutral Color Palette**: While you might love bold colors, neutral tones appeal to more buyers and make spaces feel larger.

**Focus on Key Rooms**: Prioritize staging the living room, master bedroom, and kitchen - these are the rooms buyers care about most.

**Professional Photography**: Invest in professional photos. Most buyers start their search online, and great photos can make all the difference.

**Fix Minor Repairs**: Address small issues like leaky faucets, squeaky doors, or chipped paint. These small details can turn buyers away.

**Create a Welcoming Atmosphere**: Consider adding fresh flowers, pleasant scents, and soft background music during showings.`,
  },
  '3': {
    id: '3',
    title: 'Best Neighborhoods for Families in Henderson',
    excerpt: 'A comprehensive guide to family-friendly communities with great schools and amenities.',
    image: '/placeholder-blog.jpg',
    date: 'December 15, 2024',
    category: 'Communities',
    content: `Henderson is consistently ranked as one of the best places to raise a family in Nevada. Here are the top neighborhoods for families:

**Green Valley**: This master-planned community offers excellent schools, numerous parks, and family-friendly amenities. The area has a strong sense of community and is known for its safety.

**Anthem**: A premier community with luxury homes, top-rated schools, and resort-style amenities. The area features beautiful parks, trails, and recreational facilities.

**Seven Hills**: Known for its excellent school district and family-oriented atmosphere. The community offers a variety of housing options and great amenities.

**MacDonald Ranch**: This newer development offers modern homes with energy-efficient features, excellent schools, and beautiful parks.

**Lake Las Vegas**: While known for luxury, this area also offers family-friendly neighborhoods with access to the lake, golf courses, and excellent schools.

Each of these neighborhoods offers something unique, but they all share common traits: excellent schools, safe communities, and family-friendly amenities.`,
  },
  '4': {
    id: '4',
    title: 'Understanding Probate Real Estate: A Complete Guide',
    excerpt: 'Everything you need to know about buying or selling probate properties in Nevada.',
    image: '/placeholder-blog.jpg',
    date: 'December 12, 2024',
    category: 'Probate',
    content: `Probate real estate transactions require special knowledge and expertise. Here's what you need to know:

**What is Probate?**: Probate is the legal process of distributing a deceased person's assets, including real estate, according to their will or state law.

**Why Probate Properties are Different**: These transactions involve court oversight, specific timelines, and unique legal requirements that differ from standard real estate sales.

**Working with Executors**: Executors or administrators handle the estate. They may not be familiar with real estate, so patience and clear communication are essential.

**Court Approval Required**: Most probate sales require court approval, which can add time to the transaction process.

**As-Is Sales**: Probate properties are typically sold "as-is," meaning the estate won't make repairs. Buyers should factor this into their offers.

**Opportunities for Buyers**: Probate sales can sometimes offer good value, as executors may prioritize a quick sale over maximum price.

**Professional Help is Essential**: Working with a Probate Real Estate Specialist ensures the process goes smoothly and all legal requirements are met.`,
  },
  '5': {
    id: '5',
    title: 'Las Vegas Real Estate Investment Opportunities',
    excerpt: 'Exploring the potential for real estate investment in the growing Las Vegas market.',
    image: '/placeholder-blog.jpg',
    date: 'December 10, 2024',
    category: 'Investing',
    content: `Las Vegas offers unique opportunities for real estate investors. Here's what you should know:

**Growing Population**: Las Vegas continues to attract new residents, creating consistent demand for housing.

**Tourism Industry**: The strong tourism sector provides opportunities for short-term rental investments.

**Diversified Economy**: Beyond tourism, Las Vegas has a growing tech sector, healthcare industry, and business services.

**Affordable Entry Point**: Compared to other major markets, Las Vegas offers relatively affordable entry points for investors.

**Rental Market**: Strong rental demand makes Las Vegas attractive for buy-and-hold investors.

**Tax Benefits**: Nevada's tax-friendly environment benefits investors with no state income tax.

**Market Cycles**: Understanding Las Vegas market cycles is crucial for timing your investments.

**Location Matters**: Focus on areas with strong fundamentals: good schools, employment centers, and amenities.

**Due Diligence**: Always conduct thorough research on neighborhoods, property conditions, and market trends before investing.`,
  },
  '6': {
    id: '6',
    title: 'Mortgage Pre-Approval: Your First Step to Homeownership',
    excerpt: 'Why getting pre-approved is crucial and how to navigate the mortgage process.',
    image: '/placeholder-blog.jpg',
    date: 'December 8, 2024',
    category: 'Buying',
    content: `Getting pre-approved for a mortgage is one of the most important steps in the home buying process. Here's why:

**Know Your Budget**: Pre-approval tells you exactly how much you can afford, preventing you from falling in love with homes outside your price range.

**Show Sellers You're Serious**: In competitive markets, pre-approval makes your offer stand out and shows sellers you're a qualified buyer.

**Faster Closing**: The mortgage process is already underway, which can speed up your closing timeline.

**Identify Issues Early**: Pre-approval can reveal credit or financial issues that need to be addressed before you start house hunting.

**What You'll Need**: Be prepared to provide income documentation, tax returns, bank statements, and information about your debts.

**Shop Around**: Different lenders offer different rates and terms. Get pre-approved with multiple lenders to find the best deal.

**Pre-Approval vs. Pre-Qualification**: Pre-approval is more thorough and carries more weight with sellers than pre-qualification.

**Keep It Current**: Pre-approvals typically last 60-90 days. You may need to renew if your house search takes longer.`,
  },
  '7': {
    id: '7',
    title: 'How Long Does Probate Take in Orange County? A Complete Timeline Guide',
    excerpt: 'Understanding probate timelines in Orange County, CA. Learn what factors affect probate duration and how to navigate the process efficiently.',
    image: '/placeholder-blog.jpg',
    date: 'January 20, 2026',
    category: 'Probate',
    content: `If you're dealing with an inherited property in Orange County, one of your first questions is likely: "How long does probate take?" The answer isn't always straightforward, but understanding the typical timeline can help you plan accordingly.

**The Short Answer**: In Orange County, probate typically takes **6 to 12 months** from start to finish, but can extend to 18 months or longer for complex estates.

**Why Probate Takes Time**

Probate is the legal process of validating a will, identifying assets, paying debts, and distributing property to beneficiaries. In Orange County Superior Court, this process involves multiple steps, each with its own timeline:

**1. Filing and Initial Court Proceedings (1-2 months)**

The process begins when the executor or administrator files a petition with Orange County Superior Court. The court must:
- Validate the will (if one exists)
- Appoint an executor or administrator
- Issue Letters Testamentary or Letters of Administration
- Set a hearing date

**2. Notice Period (1-2 months)**

California law requires a 4-month notice period to creditors. During this time:
- Creditors must file claims against the estate
- Beneficiaries are notified
- The estate cannot be distributed until this period expires

**3. Asset Inventory and Appraisal (1-3 months)**

The executor must:
- Identify all assets, including real estate
- Obtain professional appraisals for probate property
- File an inventory with the court
- For Orange County real estate, this often requires certified appraisals

**4. Debt Settlement (1-2 months)**

All valid creditor claims must be paid before distribution. This includes:
- Mortgages and liens on probate property
- Property taxes
- Estate administration expenses
- Final income taxes

**5. Court Approval for Property Sale (1-2 months)**

If the estate includes real estate that needs to be sold:
- The executor must obtain court approval for the sale
- A Notice of Proposed Action must be sent to beneficiaries
- If no objections are filed within 15 days, the sale can proceed
- Court confirmation may be required for the final sale

**6. Final Distribution (1-2 months)**

Once all debts are paid and assets are liquidated:
- The executor files a final accounting
- The court approves the distribution
- Assets are distributed to beneficiaries
- The estate is closed

**Factors That Can Extend Probate in Orange County**

Several factors can significantly extend the probate timeline:

**Complex Estates**: Multiple properties, business interests, or out-of-state assets can add months to the process.

**Family Disputes**: Contested wills or beneficiary disagreements can halt probate for months or even years.

**Property Issues**: Properties with title problems, environmental issues, or significant repairs needed can delay sales.

**Court Backlog**: Orange County Superior Court handles thousands of probate cases annually. During busy periods, court dates may be scheduled further out.

**Tax Complications**: Estates with complex tax situations may require additional time for IRS resolution.

**Tips to Expedite Probate in Orange County**

While you can't eliminate the required waiting periods, you can streamline the process:

**1. Work with an Experienced Probate Attorney**: A knowledgeable attorney familiar with Orange County probate procedures can help avoid delays.

**2. Hire a Certified Probate Real Estate Specialist**: When selling probate property, work with a real estate agent who understands probate court requirements and timelines.

**3. Prepare Documents Early**: Gather all necessary documents (will, death certificate, property deeds, financial records) before filing.

**4. Communicate with Beneficiaries**: Keep all beneficiaries informed to prevent objections that could delay the process.

**5. Address Property Issues Promptly**: If the probate property needs repairs or has title issues, address them early.

**Orange County-Specific Considerations**

Orange County probate cases are filed at the Central Justice Center in Santa Ana. The court has specific requirements for:
- Property appraisals (must be from certified appraisers)
- Notice requirements (strict timelines)
- Court confirmation hearings (for property sales over certain thresholds)

**When Can You Sell the Property?**

Many families want to sell inherited property quickly. In Orange County, you can typically list and market the property while probate is ongoing, but the sale cannot close until:
- The 4-month creditor notice period has expired
- Court approval for the sale is obtained
- All liens and debts are satisfied

**Bottom Line**

While probate in Orange County typically takes 6-12 months, working with experienced professionals can help ensure the process moves as efficiently as possible. If you're dealing with an inherited property, consider consulting with a Certified Probate Real Estate Specialist who understands both the real estate market and Orange County probate court procedures.

**Need Help with Your Orange County Probate Property?**

If you're navigating probate and need to sell an inherited property in Orange County, we can help. Our team specializes in probate real estate sales and understands the unique timelines and requirements of Orange County Superior Court. Contact us for a free consultation about your probate property.`,
  },
  '8': {
    id: '8',
    title: 'Selling Inherited Property in California: Tax Implications and Strategies',
    excerpt: 'Complete guide to California tax implications when selling inherited property. Learn about step-up basis, capital gains, and tax-saving strategies.',
    image: '/placeholder-blog.jpg',
    date: 'January 22, 2026',
    category: 'Probate',
    content: `Selling an inherited property in California comes with important tax considerations. Understanding these implications can help you make informed decisions and potentially save thousands of dollars.

**The Good News: Step-Up in Basis**

One of the most significant tax advantages of inheriting property is the "step-up in basis" rule. Here's how it works:

**What is Step-Up in Basis?**

When you inherit property, your tax basis is "stepped up" to the property's fair market value on the date of the decedent's death (or the alternate valuation date, if elected). This means:

- If the property was purchased for $200,000 but is worth $800,000 when inherited, your basis is $800,000
- If you sell immediately for $800,000, you pay **zero capital gains tax**
- You only pay capital gains on appreciation that occurs **after** you inherit the property

**Example Scenario**

Let's say you inherit a home in Orange County:
- Original purchase price: $300,000
- Value at date of death: $1,200,000
- Your stepped-up basis: $1,200,000
- If you sell for $1,200,000: **No capital gains tax**
- If you sell for $1,300,000: You pay capital gains on $100,000

**California Capital Gains Tax**

When you do have capital gains, California taxes them as ordinary income:

**Federal Capital Gains Tax**:
- Long-term (held over 1 year): 0%, 15%, or 20% depending on income
- Short-term (held under 1 year): Taxed as ordinary income

**California State Tax**:
- Capital gains are taxed as ordinary income
- Rates range from 1% to 13.3% depending on income level
- For high-income taxpayers, this can significantly impact your tax liability

**Property Tax Considerations**

**Proposition 13 Protection**: Inherited property may qualify for property tax reassessment protection under Proposition 58 (parent-to-child transfer) or Proposition 193 (grandparent-to-grandchild transfer) if certain conditions are met.

**Reassessment Triggers**: If the property doesn't qualify for exclusion, it will be reassessed at current market value, potentially increasing property taxes significantly.

**Important**: Work with a tax professional to determine if you qualify for Proposition 13 protection.

**Estate Tax (Generally Not Applicable)**

California does **not** have a state estate tax. The federal estate tax exemption for 2026 is $13.61 million per person ($27.22 million for married couples). Most estates in California fall well below this threshold.

**Tax Strategies When Selling Inherited Property**

**1. Sell Quickly to Minimize Appreciation**

If you plan to sell, doing so quickly can minimize capital gains:
- The longer you hold, the more it may appreciate
- Selling within the first year can help lock in the stepped-up basis benefit

**2. Consider the Two-Year Rule**

If the property was the decedent's primary residence, you may qualify for the $250,000 ($500,000 for married couples) capital gains exclusion if:
- You use it as your primary residence for 2 of the 5 years before sale
- You haven't used the exclusion on another property in the past 2 years

**3. Document Everything**

Keep detailed records of:
- Date of death property value (appraisal)
- All improvements made after inheritance
- Selling expenses (commissions, repairs, closing costs)
- These can reduce your taxable gain

**4. Time the Sale Strategically**

Consider your overall tax situation:
- If you have capital losses, you may want to realize gains in the same year
- Spreading sales across multiple tax years can help manage tax brackets

**5. Consider a 1031 Exchange (For Investment Property)**

If the inherited property is investment property, you might consider a 1031 exchange to defer capital gains taxes. However, this is complex and requires careful planning.

**Deductible Expenses**

When selling inherited property, you can deduct certain expenses from your capital gains:

**Selling Expenses**:
- Real estate commissions
- Legal fees
- Title insurance
- Escrow fees
- Transfer taxes
- Marketing and staging costs

**Improvement Costs** (not repairs):
- Major renovations that add value
- Must be documented and add to basis

**Common Tax Mistakes to Avoid**

**1. Not Getting a Professional Appraisal**: The stepped-up basis depends on accurate valuation. Get a certified appraisal at the date of death.

**2. Mixing Personal and Investment Property**: Tax treatment differs. Understand which category your inherited property falls into.

**3. Ignoring California-Specific Rules**: California has unique property tax and inheritance rules. Don't assume federal rules apply the same way.

**4. Not Consulting a Tax Professional**: Real estate and inheritance taxes are complex. A qualified CPA or tax attorney can save you money and prevent costly mistakes.

**When Multiple Heirs Inherit Property**

If multiple people inherit the property:

- Each heir gets their own stepped-up basis for their share
- Each heir is responsible for their own capital gains tax
- Consider how ownership structure (joint tenancy, tenants in common) affects taxes

**Record-Keeping Requirements**

Maintain detailed records for at least 3 years after filing your tax return (longer if you claim a loss):

- Date of death appraisal
- All closing documents
- Receipts for improvements
- Property tax records
- Insurance records

**Bottom Line**

Selling inherited property in California can have significant tax advantages, especially with the step-up in basis rule. However, the tax implications are complex and depend on your specific situation.

**Key Takeaways**:
- Step-up in basis can eliminate capital gains on inherited property
- California taxes capital gains as ordinary income
- Property tax reassessment may apply
- Timing and strategy matter for tax optimization
- Professional guidance is essential

**Need Help with Your Inherited Property Sale?**

If you're selling inherited property in Orange County, we can help you navigate both the real estate transaction and the tax implications. Our team works with tax professionals to ensure you understand all your options. Contact us for a free consultation about your inherited property.`,
  },
  '9': {
    id: '9',
    title: 'Orange County Probate Court Forms: Complete Guide for Executors and Administrators',
    excerpt: 'Essential Orange County probate court forms explained. Learn which forms you need, when to file them, and how to navigate the probate process.',
    image: '/placeholder-blog.jpg',
    date: 'January 24, 2026',
    category: 'Probate',
    content: `Navigating Orange County probate court requires filing numerous forms at specific stages of the process. As an executor or administrator, understanding which forms you need and when to file them is crucial for a smooth probate administration.

**Where to File Probate Forms in Orange County**

All probate cases in Orange County are filed at:
**Orange County Superior Court - Central Justice Center**
700 Civic Center Drive West
Santa Ana, CA 92701

The probate department is located on the 3rd floor. You can file forms in person or by mail.

**Initial Probate Forms (Opening the Estate)**

**1. Petition for Probate (Form DE-111)**

This is the first form you'll file to open probate. It includes:
- Information about the decedent
- Whether there's a will
- Names of heirs and beneficiaries
- Estimated value of the estate
- Request for appointment as executor/administrator

**2. Duties and Liabilities of Personal Representative (Form DE-147)**

This form explains your responsibilities as executor/administrator. You must sign and file this with your initial petition.

**3. Confidential Supplement to Duties and Liabilities (Form DE-147A)**

Provides additional information about the estate and must be filed confidentially.

**4. Order for Probate (Form DE-150)**

Issued by the court after your petition is approved, officially appointing you as executor or administrator.

**5. Letters Testamentary or Letters of Administration (Form DE-151)**

These "letters" prove your authority to act on behalf of the estate. You'll need certified copies to:
- Open estate bank accounts
- Sell real estate
- Access safe deposit boxes
- Deal with financial institutions

**Notice Forms**

**6. Notice of Petition to Administer Estate (Form DE-121)**

Must be published in a local newspaper and mailed to all heirs, beneficiaries, and the state controller. This starts the 4-month creditor claim period.

**7. Proof of Publication (Form DE-120)**

Confirms that the notice was published in the newspaper as required.

**8. Notice of Proposed Action (Form DE-165)**

Required when you want to sell real estate or take other significant actions. Must be sent to all interested parties at least 15 days before the action.

**Inventory and Appraisal Forms**

**9. Inventory and Appraisal (Form DE-160)**

Lists all estate assets with their values. Must be filed within 4 months of your appointment. For real estate, you'll need:
- Professional appraisals from certified appraisers
- Property descriptions
- Assessed values

**10. Appraisal Attachment (Form DE-161)**

Attach detailed appraisals for real estate and other valuable assets.

**Real Estate Sale Forms**

**11. Petition for Order Confirming Sale of Real Property (Form DE-260)**

Required if the real estate sale price exceeds certain thresholds or if court confirmation is needed. Includes:
- Property description
- Proposed sale price
- Terms of sale
- Buyer information

**12. Order Confirming Sale of Real Property (Form DE-265)**

Court order approving the sale after notice period expires with no objections.

**13. Notice of Proposed Action - Sale of Real Property (Form DE-165)**

Must be sent to all heirs and beneficiaries before selling real estate, giving them 15 days to object.

**Accounting Forms**

**14. Account (Form DE-305)**

Detailed accounting of all estate transactions, including:
- Assets received
- Income earned
- Expenses paid
- Distributions made

**15. Petition for Final Distribution (Form DE-260)**

Request to distribute remaining assets to beneficiaries and close the estate.

**16. Order for Final Distribution (Form DE-310)**

Court order approving final distribution and closing the estate.

**Other Important Forms**

**17. Creditor's Claim (Form DE-172)**

Used by creditors to file claims against the estate. Must be filed within 4 months of notice publication.

**18. Request for Special Notice (Form DE-154)**

Allows interested parties to receive notice of all probate proceedings.

**19. Spousal Property Petition (Form DE-221)**

If the decedent was married, this may be needed to determine community property rights.

**20. Ex Parte Application (Form DE-301)**

For urgent matters that need immediate court attention, such as:
- Emergency property repairs
- Time-sensitive sales
- Protecting estate assets

**Filing Fees and Costs**

Orange County probate filing fees vary based on estate value:
- Estates under $150,000: $435
- Estates $150,000-$500,000: $435 + additional fees
- Estates over $500,000: $435 + percentage-based fees

Additional costs include:
- Publication fees ($100-$200)
- Certified copy fees ($15 per copy)
- Appraisal fees ($500-$2,000+ for real estate)
- Attorney fees (if using an attorney)

**Common Filing Mistakes to Avoid**

**1. Missing Deadlines**: Probate has strict deadlines. Missing them can delay the process significantly.

**2. Incomplete Forms**: Fill out all required sections. Incomplete forms will be rejected.

**3. Wrong Forms**: Using outdated or incorrect forms will cause delays.

**4. Improper Service**: Notice requirements are strict. Improper service can invalidate proceedings.

**5. Missing Signatures**: Many forms require notarized signatures.

**Tips for Successfully Filing Probate Forms**

**1. Use Current Forms**: California probate forms are updated regularly. Download the latest versions from the California Courts website.

**2. Get Help When Needed**: Probate is complex. Consider consulting with a probate attorney, especially for larger estates.

**3. Keep Copies**: Maintain copies of all filed forms and court orders.

**4. Track Deadlines**: Create a calendar of all important dates and deadlines.

**5. Work with Experienced Professionals**: 
- Probate attorneys understand the forms and procedures
- Certified Probate Real Estate Specialists understand property sale requirements
- Appraisers know what the court requires for valuations

**Resources for Orange County Probate Forms**

**California Courts Self-Help Center**: Provides free forms and instructions
**Orange County Superior Court Website**: Local filing requirements and procedures
**California Probate Code**: The legal framework governing probate

**When to Hire an Attorney**

While you can file probate forms yourself, consider hiring an attorney if:
- The estate is complex or large
- There are disputes among heirs
- You're unfamiliar with probate procedures
- Real estate needs to be sold
- There are tax complications

**Bottom Line**

Filing probate forms in Orange County requires attention to detail and understanding of the process. While the forms may seem overwhelming, working with experienced professionals can help ensure everything is filed correctly and on time.

**Key Takeaways**:
- Probate requires multiple forms at different stages
- Forms must be filed at Orange County Superior Court in Santa Ana
- Deadlines are strict and must be met
- Real estate sales require additional forms and court approval
- Professional help can prevent costly mistakes

**Need Help with Your Orange County Probate?**

If you're dealing with probate and need to sell real estate, we specialize in probate property sales and understand all the court requirements. Contact us for a free consultation about your probate property sale.`,
  },
  '10': {
    id: '10',
    title: 'Do I Need to Go Through Probate to Sell an Inherited House in California?',
    excerpt: 'Learn when probate is required to sell inherited property in California and when you can avoid it. Understand your options and legal requirements.',
    image: '/placeholder-blog.jpg',
    date: 'January 26, 2026',
    category: 'Probate',
    content: `One of the most common questions we hear is: "Do I need to go through probate to sell an inherited house in California?" The answer depends on several factors, and understanding when probate is required can save you time, money, and stress.

**The Short Answer**

**Yes, probate is usually required** to sell an inherited house in California, but there are exceptions. The key factor is how the property was held and whether it can be transferred outside of probate.

**When Probate IS Required**

**1. Property Held in Decedent's Name Only**

If the house was owned solely in the decedent's name (not joint tenancy, not in a trust), probate is almost always required. The court must:
- Validate the will (or determine intestacy if no will)
- Appoint an executor or administrator
- Transfer legal title to the heirs
- Only then can the property be sold

**2. Property Value Exceeds $184,500**

California's simplified probate procedures (affidavit procedures) only apply to estates under $184,500. Above this threshold, full probate is typically required.

**3. No Valid Transfer Mechanism**

If there's no:
- Joint tenancy with right of survivorship
- Living trust
- Beneficiary deed
- Community property with right of survivorship

Then probate is necessary to transfer title.

**When Probate May NOT Be Required**

**1. Property Held in Joint Tenancy**

If the property was held in joint tenancy with right of survivorship, the surviving joint tenant automatically inherits the property. You can:
- Record an Affidavit of Death of Joint Tenant
- Obtain a new deed
- Sell without probate

**2. Property in a Living Trust**

If the house was transferred to a revocable living trust before death:
- The trust owns the property
- The successor trustee can sell without probate
- Only need to provide trust documents and death certificate

**3. Community Property with Right of Survivorship**

In California, community property can be held with right of survivorship. The surviving spouse inherits automatically without probate.

**4. Small Estate Affidavit (Under $184,500)**

If the total estate value (including the house) is under $184,500, you may be able to use:
- **Affidavit Procedure for Real Property (Form DE-305)**: For real estate under the threshold
- **Affidavit Procedure for Personal Property (Form DE-305)**: For other assets

This avoids full probate but still requires court filing and waiting periods.

**5. Spousal Property Petition**

If the decedent was married and the property was community property, a spousal property petition may transfer title without full probate.

**6. Beneficiary Deed (Transfer on Death Deed)**

California allows Transfer on Death (TOD) deeds. If properly executed and recorded, the beneficiary inherits without probate.

**Important Considerations**

**Even If Probate Isn't Required, You May Still Need Court Documents**

Even when probate isn't required, you'll typically need:
- Certified copy of death certificate
- Affidavit of Death of Joint Tenant (for joint tenancy)
- Trust documents (if in a trust)
- Court orders (for small estate affidavits)

**Title Companies Will Require Proof of Authority**

Before a title company will insure the sale, they need proof that:
- You have legal authority to sell
- All heirs/beneficiaries have been notified
- No other claims exist

**Timing Matters**

Even when probate isn't required, there are still waiting periods:
- Small estate affidavits: 40-day waiting period
- Joint tenancy: Can transfer immediately but may need to clear title issues
- Trust transfers: Can proceed relatively quickly

**What Happens If You Try to Sell Without Proper Authority?**

Attempting to sell inherited property without proper legal authority can result in:
- Title company refusing to insure
- Buyer backing out
- Legal liability
- Delayed or failed sale

**Steps to Determine If Probate Is Required**

**1. Check How the Property Was Held**

Review the deed to see if it shows:
- Joint tenancy
- Community property
- Trust ownership
- Individual ownership

**2. Determine Total Estate Value**

Calculate the total value of all assets. If under $184,500, simplified procedures may apply.

**3. Check for a Will or Trust**

- If there's a living trust, probate may be avoided
- If there's a will, it still needs to be probated (unless trust applies)
- If no will (intestate), probate is typically required

**4. Consult with Professionals**

- **Probate Attorney**: Can determine if probate is required
- **Title Company**: Can tell you what documents they need
- **Probate Real Estate Specialist**: Understands both legal requirements and real estate implications

**Common Scenarios**

**Scenario 1: House in Decedent's Name Only, Value $500,000**

**Answer**: Probate is required. The property exceeds the $184,500 threshold and is in the decedent's name only.

**Scenario 2: House in Joint Tenancy with Spouse**

**Answer**: Probate not required. Surviving spouse inherits automatically. Record Affidavit of Death and obtain new deed.

**Scenario 3: House in Living Trust**

**Answer**: Probate not required. Successor trustee can sell using trust documents.

**Scenario 4: House Worth $150,000, Total Estate $180,000**

**Answer**: May use small estate affidavit procedure instead of full probate.

**Scenario 5: House in Decedent's Name, No Will, Multiple Heirs**

**Answer**: Probate required. Court must determine heirs and appoint administrator.

**Working with a Probate Real Estate Specialist**

Even if probate isn't required, working with a Certified Probate Real Estate Specialist can help because they:
- Understand all transfer mechanisms
- Know what title companies require
- Can navigate complex ownership situations
- Understand timing and legal requirements
- Help avoid costly mistakes

**Bottom Line**

While probate is usually required to sell an inherited house in California, there are exceptions. The key is understanding how the property was held and whether alternative transfer mechanisms apply.

**Key Takeaways**:
- Probate is typically required for property in decedent's name only
- Joint tenancy, trusts, and small estates may avoid probate
- Even without probate, legal documents are still needed
- Title companies require proof of authority to sell
- Professional guidance can help determine your specific situation

**Need Help Determining Your Situation?**

If you've inherited a house in Orange County and aren't sure if probate is required, we can help. Our team works with probate attorneys and understands all the transfer mechanisms. Contact us for a free consultation about your inherited property.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts[id];

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  // Enhanced keywords based on post content
  const getKeywords = (postId: string, category: string) => {
    const baseKeywords = [
      post.category.toLowerCase(),
      'Orange County real estate',
      'probate real estate',
    ];
    
    // Add long-tail keywords for specific posts
    if (postId === '7') {
      return [
        ...baseKeywords,
        'how long does probate take in Orange County',
        'Orange County probate timeline',
        'probate duration California',
        'Orange County Superior Court probate',
        'probate process timeline',
      ];
    }
    if (postId === '8') {
      return [
        ...baseKeywords,
        'selling inherited property in California taxes',
        'inherited property capital gains tax',
        'step-up basis California',
        'California property tax inheritance',
        'inherited house tax implications',
      ];
    }
    if (postId === '9') {
      return [
        ...baseKeywords,
        'Orange County probate court forms',
        'California probate forms',
        'probate forms Orange County',
        'executor probate forms',
        'probate court documents',
      ];
    }
    if (postId === '10') {
      return [
        ...baseKeywords,
        'do I need to go through probate to sell inherited house California',
        'selling inherited house without probate',
        'probate required California',
        'avoid probate California',
        'inherited property probate requirements',
      ];
    }
    
    return [
      ...baseKeywords,
      'real estate tips',
      'home buying advice',
      'home selling tips',
    ];
  };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: getKeywords(id, post.category),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${id}`,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${id}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = blogPosts[id];

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.content);
  const postUrl = `${siteConfig.url}/blog/${id}`;
  const publishedDate = new Date(post.date).toISOString();

  // Get related posts (same category, exclude current)
  const relatedPosts = Object.values(blogPosts)
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        author={siteConfig.business.agents?.[0]?.name || siteConfig.business.name}
        publishedDate={publishedDate}
        image={post.image}
        url={postUrl}
        content={post.content}
      />
      <PageSchemas
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: postUrl },
        ]}
        includeFAQ={true}
        includeReviews={true}
      />
      <div className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-primary hover:text-primary-dark font-semibold inline-flex items-center mb-4"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <time dateTime={publishedDate} className="text-neutral-500">
                {post.date}
              </time>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-500">{formatReadingTime(readingTime)}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {post.title}
            </h1>
            <SocialShare 
              url={postUrl}
              title={post.title}
              description={post.excerpt}
              className="mb-6"
            />
          </div>

        {/* Featured Image */}
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={`${post.title} - Orange County Probate Real Estate Blog`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>

          {/* Social Share Bottom */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <SocialShare 
              url={postUrl}
              title={post.title}
              description={post.excerpt}
            />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group block bg-neutral-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <span className="text-xs font-semibold text-primary mb-2 block">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
            <p className="mb-6 text-neutral-100">
              Let&apos;s discuss your probate real estate needs and how we can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}



