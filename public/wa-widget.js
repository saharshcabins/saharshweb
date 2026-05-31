(function () {
    "use strict";

    var WIDGET_ID = "wa-float-widget";
    var STYLE_ID = "wa-float-widget-styles";

    var WA_ICON_SVG =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
        '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15' +
        "-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475" +
        "-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52" +
        ".149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207" +
        "-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372" +
        "-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2" +
        " 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719" +
        " 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403" +
        "h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86" +
        " 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825" +
        " 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815" +
        " 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305" +
        "-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821" +
        ' 11.821 0 00-3.48-8.413z"/>' +
        "</svg>";

    // config
    function getConfig() {
        var scripts = document.querySelectorAll("script[data-wa-phone]");
        var el = scripts[scripts.length - 1];
        if (!el) return normalize({});

        return normalize({
            phone: el.getAttribute("data-wa-phone"),
            position: el.getAttribute("data-wa-position"),
            size: el.getAttribute("data-wa-size"),
            zIndex: el.getAttribute("data-wa-z-index"),
            xOffset: el.getAttribute("data-wa-x-offset"),
            yOffset: el.getAttribute("data-wa-y-offset"),
        });
    }

    function normalize(raw) {
        var phone = String(raw.phone || "").replace(/\D/g, "");

        if (!phone) {
            warn("data-wa-phone is required. Widget not rendered.");
            return null;
        }

        var position = raw.position || "bottom-right";
        if (position !== "bottom-left" && position !== "bottom-right") {
            warn(
                'data-wa-position must be "bottom-right" or "bottom-left". Defaulting to "bottom-right".',
            );
            position = "bottom-right";
        }

        var sizeInput = toInt(raw.size);
        if (sizeInput === null || sizeInput < 0 || sizeInput > 100) {
            if (raw.size != null) {
                warn(
                    "data-wa-size must be an integer in [0, 100]. Defaulting to 50.",
                );
            }
            sizeInput = 50;
        }
        var size = Math.round(30 + (sizeInput / 100) * 60);

        var zIndex = toInt(raw.zIndex);
        if (zIndex === null) zIndex = 9999;

        var xOffset = toInt(raw.xOffset);
        if (xOffset === null || xOffset < 0) {
            if (raw.xOffset != null) {
                warn(
                    "data-wa-x-offset must be a non-negative integer. Defaulting to 20.",
                );
            }
            xOffset = 20;
        }

        var yOffset = toInt(raw.yOffset);
        if (yOffset === null || yOffset < 0) {
            if (raw.yOffset != null) {
                warn(
                    "data-wa-y-offset must be a non-negative integer. Defaulting to 20.",
                );
            }
            yOffset = 20;
        }

        return {
            phone: phone,
            position: position,
            size: size,
            zIndex: zIndex,
            xOffset: xOffset,
            yOffset: yOffset,
        };
    }

    // styles
    function injectStyles(config) {
        if (document.getElementById(STYLE_ID)) return;

        var isLeft = config.position === "bottom-left";
        var size = config.size;
        var iconSize = Math.round(size * 0.52);

        var css = [
            "#" + WIDGET_ID + " {",
            "  position: fixed;",
            "  bottom: " + config.yOffset + "px;",
            isLeft
                ? "  left: " + config.xOffset + "px; right: auto;"
                : "  right: " + config.xOffset + "px; left: auto;",
            "  width: " + size + "px;",
            "  height: " + size + "px;",
            "  border-radius: 50%;",
            "  background: #25D366;",
            "  display: flex;",
            "  align-items: center;",
            "  justify-content: center;",
            "  text-decoration: none;",
            "  box-shadow: 0 4px 14px rgba(37,211,102,0.45);",
            "  z-index: " + config.zIndex + ";",
            "  border: none;",
            "  cursor: pointer;",
            "  transition: transform 0.18s ease, box-shadow 0.18s ease;",
            "  -webkit-tap-highlight-color: transparent;",
            "  animation: wa-pop-in 0.32s cubic-bezier(0.34,1.56,0.64,1) both;",
            "}",
            "#" + WIDGET_ID + ":hover, #" + WIDGET_ID + ":focus-visible {",
            "  transform: scale(1.1);",
            "  box-shadow: 0 6px 20px rgba(37,211,102,0.55);",
            "  outline: none;",
            "}",
            "#" + WIDGET_ID + ":active { transform: scale(0.95); }",
            "#" + WIDGET_ID + " svg {",
            "  width: " + iconSize + "px;",
            "  height: " + iconSize + "px;",
            "  fill: #fff;",
            "}",
            "@keyframes wa-pop-in {",
            "  from { opacity: 0; transform: scale(0.6) translateY(10px); }",
            "  to   { opacity: 1; transform: scale(1) translateY(0); }",
            "}",
        ].join("\n");

        var style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);
    }

    // DOM
    function buildWidget(config) {
        var btn = document.createElement("a");
        btn.id = WIDGET_ID;
        btn.href = "https://wa.me/" + config.phone;
        btn.target = "_blank";
        btn.rel = "noopener noreferrer";
        btn.setAttribute("aria-label", "Chat on WhatsApp");
        btn.innerHTML = WA_ICON_SVG;
        return btn;
    }

    // mount
    function mount(config) {
        if (document.getElementById(WIDGET_ID)) return; // guard against double-mount
        injectStyles(config);
        document.body.appendChild(buildWidget(config));
    }

    function destroy() {
        var btn = document.getElementById(WIDGET_ID);
        var style = document.getElementById(STYLE_ID);
        if (btn) btn.parentNode.removeChild(btn);
        if (style) style.parentNode.removeChild(style);
    }

    // init
    function init() {
        var config = getConfig();
        if (config) mount(config);
    }

    // handle all DOM readiness states
    if (document.readyState === "loading") {
        // script loaded before DOM is ready — wait for it
        document.addEventListener("DOMContentLoaded", init);
    } else {
        // DOM is already interactive or complete — safe to run immediately
        init();
    }

    window.WhatsAppWidget = { init: init, destroy: destroy, version: "1.0.0" };

    function warn(msg) {
        if (typeof console !== "undefined" && console.warn) {
            console.warn("[WhatsAppWidget] " + msg);
        }
    }

    // strict integer parse: rejects "20px", "", null, undefined
    function toInt(v) {
        if (v == null || v === "") return null;
        var n = Number(v);
        return isFinite(n) && Math.floor(n) === n ? n : null;
    }
})();
