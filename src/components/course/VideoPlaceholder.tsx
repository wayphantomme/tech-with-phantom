interface VideoPlaceholderProps {
  title?: string;
  lessonNumber?: number;
  isPreview?: boolean;
}

export default function VideoPlaceholder({
  title = "Video Lesson",
  lessonNumber,
  isPreview = false,
}: VideoPlaceholderProps) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        backgroundColor: "#1C1D1F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Preview badge */}
      {isPreview && (
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            backgroundColor: "var(--color-primary)",
            color: "#FFFFFF",
            fontSize: "0.75rem",
            fontWeight: 700,
            padding: "0.25rem 0.75rem",
            borderRadius: "2px",
            zIndex: 1,
          }}
        >
          PREVIEW GRATIS
        </div>
      )}

      {/* Content */}
      <div style={{ textAlign: "center", color: "#FFFFFF", zIndex: 1 }}>
        {/* Play button */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "rgba(164, 53, 240, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginInline: "auto",
            marginBottom: "1.5rem",
            cursor: "pointer",
            transition: "transform 0.2s ease, background-color 0.2s ease",
          }}
          className="play-btn"
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "14px solid transparent",
              borderBottom: "14px solid transparent",
              borderLeft: "22px solid white",
              marginLeft: "6px",
            }}
          />
        </div>

        {lessonNumber && (
          <p
            style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "0.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Lesson {lessonNumber}
          </p>
        )}
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#FFFFFF",
            maxWidth: "400px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.5)",
            marginTop: "0.5rem",
          }}
        >
          Video akan segera hadir
        </p>
      </div>

      <style>{`
        .play-btn:hover {
          transform: scale(1.08);
          background-color: var(--color-primary-hover) !important;
        }
      `}</style>
    </div>
  );
}
