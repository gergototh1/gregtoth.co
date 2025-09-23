'use client'

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Greg Toth",
    "jobTitle": "Solo Developer & Vibe Coder",
    "description": "Business guy turned vibe coder. I turn ideas into software — solo. Building products with AI and modern development practices.",
    "url": "https://gregtoth.me",
    "sameAs": [
      "https://twitter.com/gregtoth_me",
      "https://linkedin.com/in/gregtoth_me",
      "https://github.com/gergototh1"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Independent"
    },
    "knowsAbout": [
      "AI Development",
      "Solo Development",
      "Business Development",
      "Product Management",
      "Vibe Coding",
      "Indie Hacking"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Business Development & Marketing"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Greg Toth",
    "description": "Personal website of Greg Toth, solo developer and vibe coder",
    "url": "https://gregtoth.me",
    "author": {
      "@type": "Person",
      "name": "Greg Toth"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://gregtoth.me/articles?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  )
}