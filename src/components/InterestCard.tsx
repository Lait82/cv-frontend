import type React from "react"
import type { Interest } from "../types"
import "../styles/InterestCard.css"

interface InterestCardProps {
  interest: Interest
}

// id: string
// name: string
// notes: string
// level_or_degree: number // 1-5
// years_of_practice: number
// icon?: s

const InterestCard: React.FC<InterestCardProps> = ({ interest }) => {
  return (
    <div className="interest-card">
      <div className="interest-header">
        {interest.icon ? (
          <div className="interest-icon">
            <i className={interest.icon}></i>
          </div>
        ) : (
          <div className="interest-icon-placeholder">{interest.name.charAt(0)}</div>
        )}
        <h3 className="interest-name">{interest.name}</h3>
      </div>

      <p className="interest-description">{interest.notes}</p>

      <div className="interest-meta">
        <div className="skill-level">
          <span className="meta-label">Skill Level:</span>
          <div className="skill-bars">
            {/* {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className={`skill-bar ${index < interest.skillLevel ? "filled" : ""}`} />
            ))} */}
            {interest.level_or_degree}
          </div>
        </div>

        <div className="experience">
          <span className="meta-label">Experience:</span>
          <span className="experience-years">{interest.years_of_practice} years</span>
        </div>
      </div>
    </div>
  )
}

export default InterestCard
