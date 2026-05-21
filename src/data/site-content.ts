import type {
  CustomerReviews,
  PaintingServices,
  ProjectGallery,
  TrustIndicators,
} from "@/entities";

const primaryServiceArea =
  "Greenville, Greer, Simpsonville, Mauldin, Spartanburg, Anderson, Easley, and nearby Upstate South Carolina communities";

export const siteImages = {
  logo: "/images/jesus-lopez/branding/logo.png",
  hero: "/images/jesus-lopez/hero.jpg",
  aboutOwner: "/images/jesus-lopez/about-owner.jpg",
  aboutWork: "/images/jesus-lopez/about-work.jpg",
  galleryFallback: "/images/jesus-lopez/gallery-fallback.jpg",
} as const;

export const paintingServices: PaintingServices[] = [
  {
    _id: "jl-service-interior",
    serviceName: "Interior Painting",
    shortSummary: "Fresh color and clean walls that bring any room to life.",
    description:
      "From single rooms to whole-home repaints, Jesus Lopez Painting handles walls, ceilings, trim, and doors with thorough prep, sharp cut-ins, and finishes built to hold up for years. Every project starts with proper surface prep and ends with a clean job site.",
    serviceImage: "",
    serviceAreaContext: primaryServiceArea,
    isFeatured: true,
  },
  {
    _id: "jl-service-exterior",
    serviceName: "Exterior Painting",
    shortSummary: "Protect your home and boost curb appeal with a lasting finish.",
    description:
      "Exterior painting in South Carolina's climate demands proper prep. Surfaces are pressure washed, scraped, and primed before the first coat goes on. The result is a finish that stands up to heat, humidity, and time.",
    serviceImage: "",
    serviceAreaContext: primaryServiceArea,
    isFeatured: true,
  },
  {
    _id: "jl-service-cabinets",
    serviceName: "Cabinet Painting",
    shortSummary: "Update your kitchen without the cost of a full remodel.",
    description:
      "Cabinet refinishing is one of the best ways to modernize a kitchen or bathroom on a budget. The process involves thorough degreasing, sanding, priming, and smooth topcoats that look factory-finished.",
    serviceImage: "",
    serviceAreaContext: primaryServiceArea,
    isFeatured: true,
  },
  {
    _id: "jl-service-drywall",
    serviceName: "Drywall & Patch Repair",
    shortSummary: "Smooth walls are the foundation of a great paint job.",
    description:
      "Cracks, holes, nail pops, and texture issues can ruin the look of new paint. Jesus handles drywall patching, skim coating, and surface prep that makes the finished result look seamless and professionally done.",
    serviceImage: "",
    serviceAreaContext: primaryServiceArea,
    isFeatured: true,
  },
  {
    _id: "jl-service-trim",
    serviceName: "Trim, Doors & Detail Work",
    shortSummary: "The crisp lines and careful details that finish a room.",
    description:
      "Baseboards, crown molding, window casings, doors, and accent features all require a steady hand and an eye for clean lines. Careful trim work is what separates a good paint job from a great one.",
    serviceImage: "",
    serviceAreaContext: primaryServiceArea,
    isFeatured: true,
  },
  {
    _id: "jl-service-pressure-washing",
    serviceName: "Pressure Washing",
    shortSummary: "Clean surfaces before painting or as a standalone service.",
    description:
      "Pressure washing removes dirt, mildew, and buildup from siding, driveways, decks, and walkways. Whether prepping for paint or refreshing the outside of a home, a clean surface makes all the difference.",
    serviceImage: "",
    serviceAreaContext: primaryServiceArea,
    isFeatured: false,
  },
];

export const projectGallery: ProjectGallery[] = [
  {
    _id: "jl-project-01",
    projectTitle: "Full Interior Repaint",
    beforePhoto: "",
    afterPhoto: "",
    projectDescription:
      "A complete interior refresh covering walls, trim, and ceilings throughout the home. Fresh neutral tones and crisp trim lines throughout.",
    projectLocation: "Greenville, SC",
    dateCompleted: "2026-04-01",
  },
  {
    _id: "jl-project-02",
    projectTitle: "Exterior Repaint & Wood Prep",
    beforePhoto: "",
    afterPhoto: "",
    projectDescription:
      "Full exterior repaint with thorough surface prep, wood repairs, and two coats on all siding and trim. Dramatic improvement in curb appeal.",
    projectLocation: "Greer, SC",
    dateCompleted: "2026-03-15",
  },
  {
    _id: "jl-project-03",
    projectTitle: "Kitchen Cabinet Refresh",
    beforePhoto: "",
    afterPhoto: "",
    projectDescription:
      "Dated oak cabinets transformed with a smooth white finish. Degreased, sanded, primed, and topcoated to a clean factory look.",
    projectLocation: "Simpsonville, SC",
    dateCompleted: "2026-02-28",
  },
  {
    _id: "jl-project-04",
    projectTitle: "Master Bedroom & Hallway",
    beforePhoto: "",
    afterPhoto: "",
    projectDescription:
      "Walls, ceiling, and all trim refreshed in a warm white palette. Clean cut-ins and smooth walls throughout.",
    projectLocation: "Mauldin, SC",
    dateCompleted: "2026-02-10",
  },
  {
    _id: "jl-project-05",
    projectTitle: "Front Porch & Trim Detail",
    beforePhoto: "",
    afterPhoto: "",
    projectDescription:
      "Porch ceiling, columns, rails, and all trim painted. Fresh look that ties the whole front elevation together.",
    projectLocation: "Greenville, SC",
    dateCompleted: "2026-01-20",
  },
];

export const customerReviews: CustomerReviews[] = [
  {
    _id: "jl-review-01",
    customerName: "Sarah M.",
    reviewText:
      "Jesus and his crew did a fantastic job on our entire first floor. They were on time every day, kept the house clean, and the work looks amazing. Sharp lines, smooth walls, and no mess left behind. We will definitely call them again.",
    rating: 5,
    reviewSource: "Google Reviews",
  },
  {
    _id: "jl-review-02",
    customerName: "David K.",
    reviewText:
      "Had our exterior painted last spring. Jesus walked the whole house with me first, gave me a fair price, and showed up when he said he would. The house looks brand new. Great experience from start to finish.",
    rating: 5,
    reviewSource: "Google Reviews",
  },
  {
    _id: "jl-review-03",
    customerName: "Michelle T.",
    reviewText:
      "We hired Jesus to repaint our kitchen cabinets and we are so happy we did. They look completely different now. Smooth finish, no brush marks, and it has held up really well for months now.",
    rating: 5,
    reviewSource: "Google Reviews",
  },
  {
    _id: "jl-review-04",
    customerName: "James R.",
    reviewText:
      "Professional, prompt, and very detail-oriented. Jesus took the time to patch and prep everything properly before painting. You can really tell the difference in the quality.",
    rating: 5,
    reviewSource: "Google Reviews",
  },
  {
    _id: "jl-review-05",
    customerName: "Priya N.",
    reviewText:
      "Wonderful service. Our living room and dining room look completely transformed. Very clean work and competitive pricing. Highly recommend.",
    rating: 5,
    reviewSource: "Google Reviews",
  },
];

export const trustIndicators: TrustIndicators[] = [
  {
    _id: "jl-trust-local",
    title: "Greenville-Based",
    indicatorImage: "",
    shortDescription:
      "Serving Greenville, Greer, Simpsonville, Mauldin, Spartanburg, Anderson, Easley, and all of Upstate South Carolina.",
    displayOrder: 1,
    isActive: true,
  },
  {
    _id: "jl-trust-estimates",
    title: "Free Estimates",
    indicatorImage: "",
    shortDescription:
      "Transparent quotes, clear scope, and no pressure. You know exactly what you are getting before work begins.",
    displayOrder: 2,
    isActive: true,
  },
  {
    _id: "jl-trust-prep",
    title: "Thorough Prep Work",
    indicatorImage: "",
    shortDescription:
      "Great painting starts with great prep. Every surface is properly cleaned, patched, and primed before a coat goes on.",
    displayOrder: 3,
    isActive: true,
  },
  {
    _id: "jl-trust-reviews",
    title: "5-Star Rated",
    indicatorImage: "",
    shortDescription:
      "A track record of happy homeowners across the Upstate built on quality work and reliable service.",
    displayOrder: 4,
    isActive: true,
  },
];
