```mermaid

---
config:
  state:
    titleTopMargin: 10
    dividerMargin: 8
    padding: 16
    nodeSpacing: 25
    rankSpacing: 80
---
stateDiagram-v2
    direction LR

    state "01. CODE & CREATIVE CODING" as TOP_CODE {
        JS : JavaScript
        P5 : p5.js
        STRUDEL : Strudel
        MAX : Max / MSP
        RNBO : RNBO
        PY : Python

        JS --> P5
        JS --> STRUDEL
        MAX --> RNBO
    }


    state "02. VISUAL & AI ASSETS" as TOP_VISUAL {
        BLENDER : Blender
        AI_MODELS : GenAI
        COMFY : ComfyUI
        CAVALRY : Cavalry

        AI_MODELS --> COMFY
        BLENDER --> TD
        BLENDER --> COMFY
    }


    state "03. MEDIA & AUDIO HUB" as CORE_HUB {
        state "TD & ABLETON" as ROUTING {
            TD : TouchDesigner
            ABLETON : Ableton Live
        }
        WEB_NULL : Web Output
        MEDIA_NULL : AE / Photoshop
    }


    state "04. OUTPUTS" as OUTPUTS {
        state "WEB SYSTEMS" as WEB {
            WEB_OUT : Interactive Web
        }
        state "LIVE PERFORMANCE" as LIVE {
            LIVE_OUT : Audio Visual
        }
        state "INTERACTIVE " as INTERACTIVE {
            INSTALL_OUT : Installation
        }
        state "MEDIA POST-PRODUCTION" as MEDIA {
            MEDIA_OUT : Final Media
        }
    }


    %% CODE → CORE
    PY --> TD
    MAX --> ABLETON
    STRUDEL --> WEB_NULL
    STRUDEL --> ABLETON


    %% VISUAL → CORE
    CAVALRY --> TD
    CAVALRY --> MEDIA_NULL


    %% OUTPUT ROUTING
    P5 --> WEB_NULL
    RNBO --> WEB_NULL
    COMFY --> MEDIA_NULL

    WEB_NULL --> WEB
    MEDIA_NULL --> MEDIA

    ROUTING --> LIVE
    ROUTING --> INTERACTIVE
