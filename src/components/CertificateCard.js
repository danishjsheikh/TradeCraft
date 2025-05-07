import React, { useRef, useEffect, useState } from "react";
import { Dialog, DialogContent, IconButton, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./CertificateCard.css";

const CertificateCard = ({ certificate, delay = 0 }) => {
  const cardRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Check if the device is mobile (useMediaQuery with maxWidth)
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  const handlePreviewClick = () => {
    if (isMobile) {
      // Open in a new tab if mobile
      window.open(certificate.icon, "_blank");
    } else {
      // Otherwise, show dialog for desktop
      setOpen(true);
    }
  };

  return (
    <>
      <div
        className="certificate-card"
        ref={cardRef}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="certificate-preview" onClick={handlePreviewClick}>
          <iframe
            src={certificate.icon}
            title={certificate.name}
            width="100%"
            height="250px"
            frameBorder="0"
          />
        </div>
        <div className="certificate-details">
          <h3>{certificate.name}</h3>
          <p>{certificate.description}</p>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <IconButton
          onClick={() => setOpen(false)}
          style={{ position: "absolute", top: 10, right: 10, zIndex: 1 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent style={{ padding: 0 }}>
          <iframe
            src={`${certificate.icon}#toolbar=0&navpanes=0&scrollbar=0`}
            title={certificate.name}
            width="100%"
            height="600px"
            style={{ border: "none" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CertificateCard;
