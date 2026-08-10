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

    %% =========================================================
    %% BACKBONE
    %% =========================================================

    TOP_CODE --> CONTROL
    TOP_VISUAL --> CONTROL

    CONTROL --> TD_HUB

    TD_HUB --> LIVE
    TD_HUB --> INSTALL
    TD_HUB --> WEB

    CONTROL --> MEDIA


    %% =========================================================
    %% 01. CODE & CREATIVE CODING
    %% =========================================================

    state "01. CODE & CREATIVE CODING" as TOP_CODE {
        PY : Python\nData / Logic
        JS_TS : JavaScript / TypeScript
        P5_GLSL : p5.js / GLSL
        STRUDEL : Strudel\nJS Live Coding
        TIDAL : TidalCycles

        JS_TS --> STRUDEL
        JS_TS --> P5_GLSL
    }


    %% =========================================================
    %% 02. VISUAL & AI ASSETS
    %% =========================================================

    state "02. VISUAL & AI ASSETS" as TOP_VISUAL {
        CAVALRY : Cavalry\n2D Motion
        BLENDER : Blender\n3D / Camera
        AI_MODELS : GenAI\nFLUX / SD / Kling
        COMFY : ComfyUI\nGeneration / Workflow

        BLENDER --> AI_MODELS
        AI_MODELS --> COMFY
    }


    %% =========================================================
    %% 03. TIMELINE & CONTROL
    %% =========================================================

    state "03. TIMELINE & CONTROL" as CONTROL {
        ABLETON : Ableton Live\nTimeline / Audio / Sync
        BITWIG : Bitwig Studio\nAudio / Sync
        MAX : Max / MSP\nM4L / Signal Processing

        ABLETON --> MAX
    }


    %% =========================================================
    %% 04. CENTRAL CORE HUB
    %% =========================================================

    state "04. CENTRAL CORE HUB" as TD_HUB {
        TD : TouchDesigner\nCentral Hub / Media Server / Spatial
    }


    %% =========================================================
    %% 05. OUTPUTS
    %% =========================================================

    state "05-A. LIVE PERFORMANCE" as LIVE {
        LIVE_OUT : Ableton / TouchDesigner / Resolume
    }

    state "05-B. PHYSICAL INSTALLATION" as INSTALL {
        INSTALL_OUT : Projection Mapping / Interactive Space
    }

    state "05-C. WEB SYSTEMS & ARCHIVE" as WEB {
        WEB_OUT : Web Canvas / Interactive Web / Archive
    }

    state "05-D. MEDIA POST-PRODUCTION" as MEDIA {
        POST : After Effects / Photoshop
        MEDIA_OUT : Final Media Render / Delivery

        POST --> MEDIA_OUT
    }


    %% =========================================================
    %% CODE → CONTROL
    %% =========================================================

    PY --> TD_HUB : System Logic
    JS_TS --> MAX : node.script
    STRUDEL --> ABLETON : MIDI
    TIDAL --> ABLETON : OSC


    %% =========================================================
    %% VISUAL → CORE
    %% =========================================================

    CAVALRY --> TD_HUB : Motion Assets
    BLENDER --> TD_HUB : 3D / Camera
    COMFY --> TD_HUB : Generated Media


    %% =========================================================
    %% CONTROL → CORE
    %% =========================================================

    ABLETON --> TD_HUB : TDAbleton / OSC / MIDI
    BITWIG --> TD_HUB : Audio / Sync
    MAX --> TD_HUB : Control Data


    %% =========================================================
    %% CORE → OUTPUT
    %% =========================================================

    TD_HUB --> LIVE : VJ / Media Server
    TD_HUB --> INSTALL : Interactive Space
    TD_HUB --> WEB : Web / Archive

    ABLETON --> LIVE : Master Audio


    %% =========================================================
    %% MEDIA PIPELINE
    %% =========================================================

    BLENDER --> POST : 3D Render
    COMFY --> POST : Generated Media

    P5_GLSL --> WEB : Web Canvas
