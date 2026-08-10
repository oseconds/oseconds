```mermaid

---
config:
  state:
    titleTopMargin: 10
    dividerMargin: 8
    padding: 12
    nodeSpacing: 15
    rankSpacing: 25
---
stateDiagram-v2
    direction TB

    state "01. CODE & CREATIVE CODING" as TOP_CODE {
        P5 : p5.js
        JS : JavaScript
        PY : Python
        STRUDEL : Strudel
        MAX : Max / MSP

        JS --> P5
        JS --> MAX
    }


    state "02. VISUAL & AI ASSETS" as TOP_VISUAL {
        CAVALRY : Cavalry
        BLENDER : Blender
        AI_MODELS : GenAI
        COMFY : ComfyUI

        AI_MODELS --> COMFY
    }


    state "03. MEDIA & AUDIO HUB" as CORE_HUB {

        state "TOUCHDESIGNER & ABLETON" as ROUTING {
            TD : TouchDesigner
            ABLETON : Ableton Live
        }

        WEB_NULL : Web Output
        MEDIA_NULL : AE / Photoshop
    }


    state "WEB" as WEB {
        WEB_OUT : Web / Archive
    }

    state "LIVE" as LIVE {
        LIVE_OUT : Ableton / Resolume
    }

    state "INSTALLATION" as INSTALL {
        INSTALL_OUT : Projection / Installation
    }

    state "MEDIA" as MEDIA {
        MEDIA_OUT : Media
    }


    %% CODE → CORE

    PY --> TD
    MAX --> TD
    STRUDEL --> ABLETON


    %% VISUAL → CORE

    CAVALRY --> TD
    BLENDER --> TD


    %% OUTPUT ROUTING

    P5 --> WEB_NULL
    COMFY --> MEDIA_NULL

    WEB_NULL --> WEB
    MEDIA_NULL --> MEDIA

    ROUTING --> LIVE
    ROUTING --> INSTALL
