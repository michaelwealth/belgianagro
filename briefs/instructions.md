🤖 Prompt for GitHub Copilot: Refactor Hero for Belgian FIT Design
Role & Context:
Act as a Principal Front-End Engineer. We are refactoring an existing Astro/Tailwind landing page. We are changing the brand from a Dutch agrofood theme to a Belgian Flanders Investment & Trade (FIT) theme. I will provide the new logos and images. Your job is to surgically update the Hero section and Navbar layouts, colors, and typography to match the new design specs exactly.

1. Global Design Tokens (Tailwind Config Updates):

Colors: Update the existing brand colors.

text-main: #050505 (Used for main headings and icons).

card-yellow: #FDF7D5 (Used for the single event card background).

bg-glow: #FCFFEB (Used for the subtle background gradient highlights).

Fonts: Maintain the local font strategy. The main heading font weight should be explicitly set to font-bold and tracking slightly tight tracking-tight.

2. Header (Navbar) Updates:

Logo: Replace the NL logo with the FIT logo (e.g., <Image src={import('src/assets/images/fit-logo.png')} ... />).

Navigation Links (Desktop): Keep "Companies", "Gallery", and "FAQs" (text-sm font-medium text-black).

CTA Button: Remove the top-right "Schedule meetings" button entirely from the desktop and mobile nav. The nav should only contain the logo on the left and links (or hamburger menu) on the right.

3. Hero Section Background & Container:

Background: Remove the old blue-to-cream gradient and the dark image mask. The new background is from src/assets/images/general/hero_bg-image.png



Container: relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 lg:pt-32 flex flex-col lg:flex-row items-center justify-between gap-12.

Here is the Hero section's background elements in the Astro component. We need to position two specific leaf image assets (hero_leaves_1.png and hero_leaves_2.png from src/assets/images/general folder) exactly as they appear in the design comps.

- Hero Container Setup:

The main wrapper for the Hero section must have relative and overflow-hidden applied. This prevents the absolutely positioned leaves from causing horizontal scrollbars.

Ensure the main content block (text, product image, and yellow event card) is wrapped in a relative z-10 container so it sits securely above the leaves.

- Positioning hero_leaves_1.png (Bottom Left):

Element: Use the Astro <Image /> component.

Styling: Apply absolute z-0 pointer-events-none.

Mobile (< 1024px): Position it at the bottom left edge. It sits below the yellow event card and behind the scroll arrow. Use -bottom-4 and -left-6 with a width of roughly w-32.

Desktop (>= 1024px): Keep it in the bottom left but scale it up. Use lg:-bottom-8 and lg:-left-12 and increase the width to lg:w-72.

- Positioning hero_leaves_2.png (Top Center/Right):

Element: Use the Astro <Image /> component.

Styling: Apply absolute z-0 pointer-events-none.

Mobile (< 1024px): This element is entirely absent from the mobile design. Hide it completely using hidden.

Desktop (>= 1024px): Make it visible with lg:block. Position it near the top navigation area, floating just behind the header content. Use lg:-top-4 and lg:left-[45%]. Set the width to roughly lg:w-96.

Animation (Optional but recommended): Add a custom subtle floating animation in tailwind.config.mjs (animate-float) to make them drift slightly up and down over a 6 to 8 second infinite linear loop.

4. Hero Content Layout (The Shift):

Mobile Flow (< 1024px):

Product Image (Top)

Text Content (Middle)

Event Card (Bottom)

Desktop Flow (>= 1024px):

Left side (50% width): Text Content stacked above the Event Card.

Right side (50% width): Product Image.

5. Typography & Text Content:

H1 Headline: "Discover the excellence of companies in Flanders". text-main, font-bold, text-4xl (mobile) to text-6xl (desktop), leading-[1.1], mb-4. Do not use a blue color.

Sub-headline: "Visit the Belgian Pavilion at Agrofood Nigeria 2026". text-main, text-lg to text-xl, font-medium, mb-8.

6. The Main Product Image:

Unlike the previous design, this is not a masked background image. It is a standalone image element.

Styling: <Image src={import('src/assets/images/general/hero_products.png')} class="w-full max-w-2xl rounded-[2rem] shadow-sm object-cover" ... />. 

7. The Single Event Card (Replacing the two glass cards):

Remove the B2B Matchmaking card and the Netherlands Pavilion card. We now have one distinct card.

Card Container: * Background: Solid bg-card-yellow.

Shape: Specific asymmetrical rounding. Use rounded-2xl rounded-tr-[3rem].

Padding: p-6 lg:p-8.

Shadow: shadow-sm.

Card Content (List Layout):

Use a flex column with gap-4.

Row 1: Calendar icon (black) + "24 - 26 March 2026" (font-semibold text-main).

Row 2: Clock icon (black) + "10:00 - 17:00 Daily" (font-semibold text-main).

Row 3: Location Pin icon (black) + "Landmark Event Centre," (bold) "Victoria Island, Lagos." (regular text).

Icons: Ensure all SVG icons use a black/dark fill to match the text. Remove any blue tints.

Footer Link: "Register interest ▸". Pushed below the list (mt-4). text-sm font-bold text-main flex items-center gap-1.

8. Scroll Indicator:

Keep the circular downward scroll arrow at the bottom center of the hero section.

Please provide the updated Astro component code for the Header and Hero sections ensuring zero external asset requests.

9. Companies list:
- Bio DP
- Belgian Pork Group (BPG)
- Crops Fruit
- Mercordi Animal Care
- Michiels Fabrieken
- Fam Stumabo.

10. Remote Git is at https://github.com/michaelwealth/belgianagro.git