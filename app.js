"""
KhmerCrop AI · Project Control — Streamlit wrapper

This app is originally a plain static HTML/CSS/JS site (see README.md).
Streamlit Community Cloud needs a Python entry point, so this file loads
index.html / css/style.css / js/app.js from disk, inlines the CSS and JS
into a single HTML document, and renders it inside an embedded iframe
via streamlit.components.v1.html.

Note: the original app persists data with the browser's localStorage.
Because Streamlit renders this inside a sandboxed iframe, localStorage
may not reliably persist between page reloads/reruns in every browser.
For guaranteed persistence, GitHub Pages (see README.md) is the better
host for this project. This wrapper is provided for people who
specifically want it available on Streamlit Cloud.
"""

from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="KhmerCrop AI · Project Control",
    page_icon="🌾",
    layout="wide",
)

BASE_DIR = Path(__file__).parent


def load_text(relative_path: str) -> str:
    return (BASE_DIR / relative_path).read_text(encoding="utf-8")


def build_standalone_html() -> str:
    html = load_text("index.html")
    css = load_text("css/style.css")
    js = load_text("js/app.js")

    # Inline the external stylesheet
    html = html.replace(
        '<link rel="stylesheet" href="css/style.css">',
        f"<style>\n{css}\n</style>",
    )

    # Inline the external script
    html = html.replace(
        '<script src="js/app.js"></script>',
        f"<script>\n{js}\n</script>",
    )

    return html


standalone_html = build_standalone_html()

components.html(standalone_html, height=1600, scrolling=True)

st.caption(
    "🌾 KhmerCrop AI · Project Control — served from a static "
    "HTML/CSS/JS app embedded via Streamlit components."
)
