/**
 * Single source of truth for company details, navigation and the price list.
 * Content mirrors nitroheat.com as of the 2026-08-31 rebuild.
 */

export const COMPANY = {
  name: "NitroHeat",
  legalName: "Nitroheat LLC",
  tagline: "The Smarter Way to Apply Paint",
  foundedYear: 2010,
  address: {
    line1: "163 SW Freeman Avenue, Ste D",
    city: "Hillsboro",
    state: "OR",
    zip: "97123",
    country: "USA",
  },
  /** Manufacturing address, matching the registered business address. */
  manufacturingAddress: "163 SW Freeman Avenue, Ste D, Hillsboro, Oregon, 97123, USA",
  phone: "(503) 999-3647",
  phoneHref: "tel:+15039993647",
  email: "info@nitroheat.com",
  website: "https://nitroheat.com",
} as const;

export const STATS = [
  { value: "14+", label: "Countries" },
  { value: "1,456+", label: "Companies" },
  { value: "3,100+", label: "Installations" },
] as const;

export type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const NAV: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/nitromax", label: "Nitromax" },
      { href: "/nitro-weld", label: "Nitro Weld" },
      { href: "/heat-pro", label: "Heat Pro" },
      { href: "/price", label: "Price" },
    ],
  },
  {
    href: "/support",
    label: "Support",
    children: [
      { href: "/videos", label: "Videos" },
      { href: "/installation", label: "Installation" },
      { href: "/technical-specifications", label: "Technical Specifications" },
      { href: "/downloads", label: "Downloads" },
      { href: "/product-registration", label: "Product Registration" },
      { href: "/warranty", label: "Warranty" },
    ],
  },
  { href: "/about", label: "About" },
  {
    href: "/contact",
    label: "Contact",
    children: [
      { href: "/rfq", label: "RFQ" },
      { href: "/distributors", label: "Distributors" },
    ],
  },
];

export const SISTER_SITES = [
  { href: "https://usagomobile.com", label: "USA GoMobile" },
  { href: "https://gomodetail.com", label: "GoMoDetail" },
  { href: "https://gomotires.com", label: "GoMoTires" },
] as const;

export type PriceRow = {
  model: string;
  description: string;
  price: string;
};

export const PRICE_LIST: PriceRow[] = [
  { model: "NM30", description: "Dual Booth N2 Generator with 2 x HP200 and 2 x NHH50", price: "$39,458" },
  { model: "NM15", description: "Single Booth N2 Generator with 1 x HP200 and 1 x NHH50", price: "$26,705" },
  { model: "NG30", description: "Dual booth Nitrogen Generator", price: "$28,339" },
  { model: "NG15", description: "Single Booth Nitrogen Generator", price: "$21,108" },
  { model: "HP200", description: "Heater Controller", price: "$4,770" },
  { model: "NHH50", description: "50ft Heated Hose", price: "$789.50" },
  { model: "NW650", description: "Nitrogen Plastic Welder", price: "$2,940" },
  { model: "NW650-N2", description: "Nitrogen generator for plastic welder", price: "$3,540" },
  { model: "NGS-4", description: "Nitromax service kit (includes 1 x Coalescent and 3 x Active Carbon cartridges)", price: "$546.50" },
  { model: "F1", description: "Water Separator", price: "$397.90" },
  { model: "F2", description: "Coalescent Cartridge", price: "$88.50" },
  { model: "F3", description: "Active Carbon Cartridge (requires 3 pieces per unit)", price: "$116.25" },
  { model: "NW650-E1", description: "Replacement Ceramic Heater Element", price: "$145.95" },
];

export const PRICE_DISCLAIMER = "All prices exclude shipping, installation, and training.";

/** Shared by every form's Country select. */
export const COUNTRIES = [
  "United States of America", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria",
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Chad", "Chile",
  "China", "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Côte d'Ivoire", "Denmark", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Georgia", "Germany", "Ghana",
  "Greece", "Guatemala", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland",
  "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland (Republic of)",
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Korea (Republic of)",
  "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritius",
  "Mexico", "Moldova (Republic of)", "Monaco", "Mongolia", "Montenegro", "Morocco",
  "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
  "Niger", "Nigeria", "North Macedonia (Republic of)", "Norway", "Oman", "Pakistan", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico",
  "Qatar", "Romania", "Russian Federation", "Rwanda", "Saudi Arabia", "Senegal", "Serbia",
  "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Sudan", "Spain",
  "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syrian Arab Republic",
  "Taiwan, Province of China", "Tajikistan", "Tanzania (United Republic of)", "Thailand",
  "Togo", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom of Great Britain and Northern Ireland", "Uruguay",
  "Uzbekistan", "Venezuela (Bolivarian Republic of)", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
];

export const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];
