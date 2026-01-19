import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { PageSchemas } from '@/components/schema/PageSchemas';
import { InternalLinks } from '@/components/ui/InternalLinks';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Probate Real Estate Glossary | Probate Terms & Definitions | Orange County, CA',
  description: 'Comprehensive probate real estate glossary defining key terms like executor, administrator, letters testamentary, probate, intestate, and more. Essential probate terminology for Orange County, California.',
  keywords: [
    'probate glossary',
    'probate terms',
    'probate definitions',
    'executor definition',
    'administrator probate',
    'letters testamentary',
    'probate real estate terms',
    'Orange County probate glossary',
    'California probate terminology',
    'probate court terms',
    'estate administration terms',
    'inheritance terms',
  ],
  openGraph: {
    title: 'Probate Real Estate Glossary | Probate Terms & Definitions',
    description: 'Comprehensive glossary of probate real estate terms and definitions for Orange County, California.',
    url: `${siteConfig.url}/glossary`,
  },
  alternates: {
    canonical: `${siteConfig.url}/glossary`,
  },
};

interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Administrator',
    definition: 'A person appointed by the probate court to manage and distribute an estate when the decedent died without a will (intestate) or when no executor was named in the will. The administrator has similar responsibilities to an executor but is appointed by the court rather than named in a will.',
    relatedTerms: ['Executor', 'Intestate', 'Probate Court'],
  },
  {
    term: 'Affidavit',
    definition: 'A written statement sworn to be true before a notary public or other authorized official. In probate, affidavits are commonly used for small estate procedures and to verify facts about the estate.',
  },
  {
    term: 'Beneficiary',
    definition: 'A person or entity named in a will, trust, or insurance policy to receive assets from an estate. Beneficiaries can be heirs, family members, charities, or other designated recipients.',
    relatedTerms: ['Heir', 'Will', 'Trust'],
  },
  {
    term: 'Bequest',
    definition: 'A gift of personal property (not real estate) left to a beneficiary in a will. Real estate gifts are called "devises."',
    relatedTerms: ['Devise', 'Will', 'Legacy'],
  },
  {
    term: 'Conservatorship',
    definition: 'A court-supervised arrangement where a conservator is appointed to manage the financial affairs and/or personal care of a person who is unable to manage their own affairs due to incapacity. Different from probate, which deals with deceased persons.',
  },
  {
    term: 'Creditor',
    definition: 'A person or entity to whom the decedent owed money at the time of death. Creditors must file claims against the estate within a specified time period (typically 4 months in California) to be paid from estate assets.',
    relatedTerms: ['Estate', 'Probate'],
  },
  {
    term: 'Date of Death Value',
    definition: 'The fair market value of estate assets as of the date the decedent died. This value is used for estate tax purposes, probate inventory, and establishing the stepped-up basis for capital gains tax calculations.',
    relatedTerms: ['Step-Up in Basis', 'Fair Market Value', 'Appraisal'],
  },
  {
    term: 'Decedent',
    definition: 'The legal term for a person who has died. Used throughout probate proceedings to refer to the deceased individual whose estate is being administered.',
  },
  {
    term: 'Devise',
    definition: 'A gift of real estate (real property) left to a beneficiary in a will. Personal property gifts are called "bequests."',
    relatedTerms: ['Bequest', 'Will', 'Real Property'],
  },
  {
    term: 'Estate',
    definition: 'All property, assets, and debts owned by a person at the time of their death. The estate includes real estate, bank accounts, investments, personal property, and any outstanding debts or liabilities.',
    relatedTerms: ['Probate', 'Assets', 'Debts'],
  },
  {
    term: 'Executor',
    definition: 'A person named in a will to manage and distribute the decedent\'s estate according to the will\'s instructions. The executor must be approved by the probate court and receives Letters Testamentary as proof of authority to act on behalf of the estate.',
    relatedTerms: ['Administrator', 'Letters Testamentary', 'Will'],
  },
  {
    term: 'Fair Market Value',
    definition: 'The price that a property would sell for on the open market between a willing buyer and willing seller, with neither being under compulsion to buy or sell. Used for probate appraisals and estate valuations.',
    relatedTerms: ['Appraisal', 'Date of Death Value', 'Market Value'],
  },
  {
    term: 'Heir',
    definition: 'A person entitled to inherit property from a decedent according to state intestacy laws when there is no will. Heirs are determined by family relationship and state law, while beneficiaries are named in a will or trust.',
    relatedTerms: ['Beneficiary', 'Intestate', 'Intestacy Laws'],
  },
  {
    term: 'Intestate',
    definition: 'Dying without a valid will. When a person dies intestate, their estate is distributed according to state intestacy laws rather than their personal wishes. The probate court appoints an administrator to handle the estate.',
    relatedTerms: ['Testate', 'Intestacy Laws', 'Administrator'],
  },
  {
    term: 'Intestacy Laws',
    definition: 'State laws that determine how an estate is distributed when someone dies without a will. In California, intestacy laws specify which family members inherit and in what order (spouse, children, parents, siblings, etc.).',
    relatedTerms: ['Intestate', 'Heir', 'Probate'],
  },
  {
    term: 'Inventory',
    definition: 'A detailed list of all assets in an estate, including real estate, bank accounts, investments, personal property, and their values. The executor or administrator must file an inventory with the probate court, typically within 4 months of appointment.',
    relatedTerms: ['Estate', 'Appraisal', 'Probate Court'],
  },
  {
    term: 'Letters of Administration',
    definition: 'A court document issued to an administrator (appointed when there is no will or no executor named) that grants legal authority to manage and distribute an intestate estate. Similar to Letters Testamentary but for administrators.',
    relatedTerms: ['Administrator', 'Letters Testamentary', 'Intestate'],
  },
  {
    term: 'Letters Testamentary',
    definition: 'A court document issued to an executor named in a will that grants legal authority to manage and distribute the estate according to the will. Executors need certified copies of Letters Testamentary to open estate accounts, sell property, and deal with financial institutions.',
    relatedTerms: ['Executor', 'Will', 'Probate Court'],
  },
  {
    term: 'Legacy',
    definition: 'A general term for any gift left to a beneficiary in a will, whether real estate (devise) or personal property (bequest).',
    relatedTerms: ['Bequest', 'Devise', 'Will'],
  },
  {
    term: 'Notice of Proposed Action',
    definition: 'A document required in California probate when the executor or administrator wants to take significant actions like selling real estate. Must be sent to all heirs and beneficiaries at least 15 days before the action, giving them opportunity to object.',
    relatedTerms: ['Executor', 'Administrator', 'Probate Sale'],
  },
  {
    term: 'Personal Representative',
    definition: 'A general term that includes both executors (named in a will) and administrators (appointed by the court). The personal representative is responsible for managing and distributing the estate.',
    relatedTerms: ['Executor', 'Administrator'],
  },
  {
    term: 'Probate',
    definition: 'The legal process of validating a will (if one exists), identifying and inventorying assets, paying debts and taxes, and distributing remaining property to beneficiaries or heirs. Probate is supervised by the probate court and ensures proper transfer of assets after death.',
    relatedTerms: ['Probate Court', 'Estate', 'Executor', 'Administrator'],
  },
  {
    term: 'Probate Court',
    definition: 'A specialized court that oversees probate proceedings, validates wills, appoints executors and administrators, approves estate distributions, and ensures compliance with probate laws. In Orange County, probate cases are handled by Orange County Superior Court.',
    relatedTerms: ['Probate', 'Superior Court', 'Estate Administration'],
  },
  {
    term: 'Probate Property',
    definition: 'Real estate or other assets that are part of an estate and must go through probate court proceedings before they can be sold or transferred to beneficiaries. Property held in joint tenancy or in a trust typically avoids probate.',
    relatedTerms: ['Probate', 'Estate', 'Real Property'],
  },
  {
    term: 'Probate Sale',
    definition: 'The sale of real estate that is part of a probate estate. Probate sales require court approval, professional appraisals, notice to beneficiaries, and compliance with specific court procedures. The sale cannot close until court authorization is obtained.',
    relatedTerms: ['Probate Property', 'Court Approval', 'Notice of Proposed Action'],
  },
  {
    term: 'Real Property',
    definition: 'Land and anything permanently attached to it, including buildings, structures, and improvements. Real property is distinguished from personal property (movable items). In probate, real property sales require court approval.',
    relatedTerms: ['Personal Property', 'Real Estate', 'Probate Sale'],
  },
  {
    term: 'Small Estate Affidavit',
    definition: 'A simplified probate procedure available in California for estates valued under $184,500. Allows transfer of assets without full probate proceedings, though still requires court filing and waiting periods.',
    relatedTerms: ['Probate', 'Estate', 'Affidavit'],
  },
  {
    term: 'Step-Up in Basis',
    definition: 'A tax benefit where inherited property receives a new tax basis equal to its fair market value on the date of death. This eliminates capital gains tax on appreciation that occurred before inheritance. For example, if property was purchased for $200,000 but is worth $800,000 at death, the heir\'s basis is $800,000.',
    relatedTerms: ['Date of Death Value', 'Capital Gains Tax', 'Fair Market Value'],
  },
  {
    term: 'Successor Trustee',
    definition: 'A person named in a trust document to take over trust management after the original trustee dies or becomes incapacitated. Successor trustees can sell trust property without probate, as the trust owns the property, not the decedent.',
    relatedTerms: ['Trust', 'Trustee', 'Living Trust'],
  },
  {
    term: 'Superior Court',
    definition: 'California\'s general jurisdiction trial court that handles probate matters, among other cases. In Orange County, probate cases are filed at Orange County Superior Court - Central Justice Center in Santa Ana.',
    relatedTerms: ['Probate Court', 'Orange County'],
  },
  {
    term: 'Testate',
    definition: 'Dying with a valid will. When a person dies testate, their estate is distributed according to their will\'s instructions, and the named executor manages the probate process.',
    relatedTerms: ['Intestate', 'Will', 'Executor'],
  },
  {
    term: 'Trust',
    definition: 'A legal arrangement where property is held by a trustee for the benefit of beneficiaries. Property held in a revocable living trust avoids probate because the trust owns the property, not the decedent. The successor trustee can manage and distribute trust assets without court supervision.',
    relatedTerms: ['Living Trust', 'Successor Trustee', 'Beneficiary'],
  },
  {
    term: 'Will',
    definition: 'A legal document that specifies how a person\'s assets should be distributed after death and names an executor to manage the estate. A will must be validated by probate court before it can be used to distribute assets.',
    relatedTerms: ['Testate', 'Executor', 'Probate'],
  },
];

// Group terms by first letter for alphabet navigation
const termsByLetter = glossaryTerms.reduce((acc, term) => {
  const firstLetter = term.term.charAt(0).toUpperCase();
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }
  acc[firstLetter].push(term);
  return acc;
}, {} as Record<string, GlossaryTerm[]>);

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function GlossaryPage() {
  return (
    <>
      <PageSchemas
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Glossary', url: '/glossary' },
        ]}
        includeFAQ={false}
        includeReviews={true}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Probate Real Estate <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">Glossary</span>
            </h1>
            <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
              Comprehensive definitions of probate terms, legal concepts, and real estate terminology for Orange County, California
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Understanding probate terminology is essential when dealing with inherited property or estate administration. This glossary defines key probate real estate terms you'll encounter throughout the probate process in Orange County, California.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Whether you're an executor, administrator, beneficiary, or considering selling probate property, these definitions will help you navigate the probate process with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Alphabet Navigation */}
        <section className="py-8 bg-neutral-50 border-b border-neutral-200 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {alphabet.map((letter) => {
                const hasTerms = termsByLetter[letter];
                return (
                  <a
                    key={letter}
                    href={`#letter-${letter}`}
                    className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                      hasTerms
                        ? 'bg-white text-primary hover:bg-primary hover:text-white border-2 border-primary shadow-sm hover:shadow-md'
                        : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                    }`}
                  >
                    {letter}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Glossary Terms */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {alphabet.map((letter) => {
              const terms = termsByLetter[letter];
              if (!terms || terms.length === 0) return null;

              return (
                <div key={letter} id={`letter-${letter}`} className="mb-16 scroll-mt-24">
                  <h2 className="text-4xl font-bold text-neutral-900 mb-8 pb-4 border-b-2 border-primary">
                    {letter}
                  </h2>
                  <div className="space-y-8">
                    {terms.map((item, index) => {
                      const termId = item.term.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      return (
                      <div
                        key={`${item.term}-${index}`}
                        id={termId}
                        className="bg-white rounded-xl p-6 border-2 border-neutral-200 hover:border-primary transition-all duration-300 shadow-soft hover:shadow-soft-lg scroll-mt-24"
                      >
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          {item.term}
                        </h3>
                        <p className="text-neutral-700 leading-relaxed mb-4">
                          {item.definition}
                        </p>
                        {item.relatedTerms && item.relatedTerms.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-neutral-200">
                            <p className="text-sm font-semibold text-neutral-600 mb-2">
                              Related Terms:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.relatedTerms.map((relatedTerm) => {
                                const termExists = glossaryTerms.some((t) => t.term === relatedTerm);
                                const relatedTermId = relatedTerm.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                                return termExists ? (
                                  <a
                                    key={relatedTerm}
                                    href={`#${relatedTermId}`}
                                    className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                                  >
                                    {relatedTerm}
                                  </a>
                                ) : (
                                  <span
                                    key={relatedTerm}
                                    className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-lg text-sm font-medium"
                                  >
                                    {relatedTerm}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help with Probate Property?
            </h2>
            <p className="text-xl mb-8 text-neutral-100">
              Understanding probate terms is just the beginning. Our Certified Probate Real Estate Specialists can help you navigate the entire probate process in Orange County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Get Free Consultation
              </Button>
              <Button href="/probate" variant="secondary" size="lg">
                Learn About Probate Process
              </Button>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InternalLinks
              title="Explore More Probate Resources"
              description="Continue learning about probate real estate in Orange County."
              links={[
                {
                  href: '/probate',
                  text: 'Understanding the Probate Process',
                  description: 'Learn how probate works and what to expect',
                },
                {
                  href: '/faq',
                  text: 'Frequently Asked Questions',
                  description: 'Answers to common probate questions',
                },
                {
                  href: '/blog',
                  text: 'Probate Real Estate Blog',
                  description: 'Expert insights and probate guides',
                },
                {
                  href: '/services',
                  text: 'Our Probate Services',
                  description: 'Comprehensive probate real estate services',
                },
                {
                  href: '/sellers/valuation',
                  text: 'Property Valuation',
                  description: 'Get a free probate property valuation',
                },
                {
                  href: '/contact',
                  text: 'Contact Us',
                  description: 'Speak with a probate specialist',
                },
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
}
