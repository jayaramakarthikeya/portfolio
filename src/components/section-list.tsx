import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Image from 'next/image'

export type Item = {
  title: string
  href: string
  role: string
  period?: string
  description: Array<string> | string
  image: string
}

type SectionListProps = {
  title: string
  items: Item[]
  viewAllHref?: string
  viewAllText?: string
}

export function SectionList({
  title,
  items,
  viewAllHref,
  viewAllText,
}: SectionListProps) {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> {title}
      </h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.title} className="group flex items-start space-x-4">
            {/* Render image */}
            {item.image && (
              <img
                src={item.image}
                alt={`${item.title} logo`}
                className="w-48 h-32 object-cover rounded-lg"
              />
            )}
            {/* Content block */}
            <div>
              {/* Title and subtitle */}
              <Link href={item.href} target="_blank">
                <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-accent transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {item.role} {item.period && `(${item.period})`}
                </p>
              </Link>
              {/* Description as bullet points */}
              {Array.isArray(item.description) ? (
                <ul className="list-disc pl-5 text-gray-300">
                  {item.description.map((point, i) => (
                    <li key={i} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}