# Project Architecture

- Keep the portfolio as a single-page React/Vite presentation with visible, non-modal core content so recruiters and assistive technology can scan it quickly.
- Track the active anchor section with passive, animation-frame-throttled scroll updates so navigation also handles short sections at the page bottom without dependencies.