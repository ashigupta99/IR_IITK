import "./fep.css";

export default function FEP() {
  return (
    <section className="fep-section">
      <div className="fep-container">

        {/* Left Content */}
        <div className="fep-content">
          <h1 className="fep-title">Foreign Exchange Programme (FEP)</h1>

          <p className="fep-desc">
            The Foreign Exchange Programme (FEP) facilitates semester-long
            exchange opportunities, global academic exposure, and international
            collaboration for IIT Kanpur students. Through partnerships with
            universities worldwide, FEP enables students to broaden their
            academic and cultural horizons.
          </p>

          {/* Action Cards */}
          <div className="fep-actions">

            {/* Brochure */}
            <a
              href="/fep-brochure.pdf"
              target="_blank"
              className="fep-action subtle"
            >
              📄 View Brochure
            </a>

            {/* Policy */}
            <a
              href="/fep-policy.pdf"
              target="_blank"
              className="fep-action subtle"
            >
              📜 View Policy
            </a>

            {/* Proposal Form */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScAwcBoHQt6T0hjG_HstJ5xHmPOTuo8NI5wMUeHo25JmhiMaw/viewform?usp=header"
              target="_blank"
              className="fep-action primary"
            >
              📝 Proposal Form
            </a>

          </div>
        </div>

        {/* Right Image */}
        <div className="fep-image-wrapper">
          <img
            src="/Images/fep-image.png"
            alt="International exchange programme"
            className="fep-image"
          />
        </div>

      </div>
    </section>
  );
}
