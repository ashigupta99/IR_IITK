export default function About() {
  return (
    <div>
      <h1 style={{
  fontSize: '3rem',       // ~48px for strong prominence
  fontWeight: 900,        // maximum bold
  lineHeight: 1.2,
  marginBottom: '1rem',
}}>
  ABOUT US
</h1>
<p
  style={{
    fontSize: '1.25rem',     // roughly 20px (1.25 × 16px)
    lineHeight: 1.5,          // comfortable spacing: 1.5 × font size
    padding: '0.75rem',      // moderate padding
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '0.75rem'
  }}

>The International Relations Wing of the Academics and Career Council at IIT Kanpur is a dedicated team of bright and ambitious students committed to fostering and nurturing relationships between IITK and its international counterparts. Working closely with the Office of International Relations (OIR), our mission is to encourage talented young minds to explore their areas of interest, enhance their skills, and develop a global perspective through semester exchange programs and research internships with top-notch international institutes.
Our team works tirelessly to maintain a spirit of collaboration, excitement, and a broad perspective in the interest of campus community. We are dedicated to enriching the IITK community and promoting global academic exchange.</p>
</div>
  );
}
