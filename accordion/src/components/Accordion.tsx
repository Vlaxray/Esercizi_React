import * as React from 'react';

const faqData = [
  {
    title: "What is Github and how does it work?",
    content:
      "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
  },
  {
    title: "How do I see GitHub's availability?",
    content: "Check our real-time status report",
  },
  {
    title: "Why is GitHub so popular?",
    content:
      "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
  },
];

const Accordion = () => {
    return (
      <div className="accordion" id="accordionExample">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={`collapse${index}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Accordion;









