import React, { useEffect, useRef } from "react";
import Header from "./Header";
import './styles/Blogs.css';

const Blogs = () => {
  const stepsRef = useRef([]);

  // Steps for building a computer
  const steps = [
    {
      step: 1,
      title: "Choose Your Components",
      description: "Select your CPU, GPU, motherboard, RAM, storage, and power supply.",
      extra: "Think about your budget and target resolution (1080p, 1440p, or 4K) before you pick parts.",
    },
    {
      step: 2,
      title: "Prepare the Motherboard",
      description: "Install the CPU, RAM, and cooler on the motherboard before placing it in the case.",
      extra: "Double‑check the CPU socket alignment and make sure RAM sticks are fully clicked into place.",
    },
    {
      step: 3,
      title: "Install the Power Supply",
      description: "Place the power supply in the case and connect the necessary power cables.",
      extra: "Route the 24‑pin motherboard and 8‑pin CPU cables early to keep cable management clean.",
    },
    {
      step: 4,
      title: "Install the Storage",
      description: "Add your storage devices (SSD, HDD) and connect them to the motherboard.",
      extra: "Use an NVMe SSD for your operating system to get much faster boot and load times.",
    },
    {
      step: 5,
      title: "Install the GPU",
      description: "Place your GPU in the PCIe slot and connect power cables if needed.",
      extra: "Secure the GPU with case screws and make sure any PCIe power connectors are firmly attached.",
    },
    {
      step: 6,
      title: "Connect the Peripherals",
      description: "Attach the monitor, keyboard, mouse, and other peripherals.",
      extra: "If your monitor supports it, use DisplayPort or HDMI 2.1 to unlock higher refresh rates.",
    },
    {
      step: 7,
      title: "Boot and Test",
      description: "Power on the system, enter the BIOS to check the hardware, and install your OS.",
      extra: "Run a few stress tests and temperature checks to confirm everything is stable and properly cooled.",
    },
  ];

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="guide-container">
      <Header />

      <div className="guide-content">
        {/* Left intro column - sticky */}
        <div className="guide-hero">
          <span className="guide-eyebrow">Build Your Own PC</span>
          <h1 className="guide-title">How to Build a Computer</h1>
          <p className="guide-subtitle">
            A simple, step‑by‑step walkthrough of the full build process. Work your way
            from choosing parts to powering on for the first time.
          </p>

          {/* Progress indicator */}
          <div className="progress-indicator">
            <div className="progress-line"></div>
            <div className="progress-steps">
              {steps.map((step) => (
                <div key={step.step} className="progress-dot">
                  <span>{step.step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right steps column - scrollable */}
        <div className="guide-steps">
          {steps.map((step, index) => (
            <div
              key={step.step}
              ref={(el) => (stepsRef.current[index] = el)}
              className="step-card"
            >
              {/* Left accent line */}
              <div className="step-accent"></div>

              <div className="step-header">
                <div className="step-badge">
                  <span className="step-number">{step.step}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
              </div>

              <p className="step-description">{step.description}</p>

              <div className="step-tip">
                <svg className="tip-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zm0-6H7V4h2v2z" fill="currentColor" />
                </svg>
                <p className="step-extra">{step.extra}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
