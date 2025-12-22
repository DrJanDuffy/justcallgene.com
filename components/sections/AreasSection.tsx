import Image from 'next/image';
import Link from 'next/link';
import { communities } from '@/lib/data';
import { Card } from '@/components/ui/Card';

export function AreasSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Areas I Serve
          </h2>
          <p className="text-lg text-neutral-600">Featured Areas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <Card
              key={community.id}
              href={`/communities/${community.slug}`}
              className="group"
            >
              <div className="relative h-48">
                <Image
                  src={community.image}
                  alt={community.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {community.name}
                  </h3>
                  <p className="text-sm text-neutral-200">
                    Community {index + 1}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

