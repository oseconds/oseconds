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
    %% [BACKBONE SKELETON] 수직 정렬 강제 뼈대
    %% =========================================================
    TOP_SCRIPT --> MID_AUDIO
    TOP_VISUAL --> MID_CORE
    MID_AUDIO --> OUT_LIVE
    MID_CORE --> OUT_INSTALL
    MID_CORE --> OUT_MEDIA

    %% =========================================================
    %% [TOP LAYER] SOURCE & CODE (코드 및 크리에이티브 코딩)
    %% =========================================================
    state "01. CODE & CREATIVE CODING" as TOP_SCRIPT {
        PY : Python (Data / Logic)
        JS_TS : JavaScript / TypeScript
        P5_GLSL : p5.js / GLSL
        STRUDEL : Strudel (JS Live Coding)
        TIDAL : TidalCycles
        
        JS_TS --> STRUDEL : Engine Base
        JS_TS --> P5_GLSL : Web Visual Logic
    }

    state "02. VISUAL & AI ASSETS" as TOP_VISUAL {
        CAVALRY : Cavalry (2D Motion)
        BLENDER : Blender (3D / Camera)
        AI_MODELS : GenAI (FLUX / SD / Kling)
        COMFY : ComfyUI Workflows

        BLENDER --> AI_MODELS : Depth / Structure
        AI_MODELS --> COMFY : AI Generate
    }

    %% =========================================================
    %% [MIDDLE LAYER] CORE CONTROL & HUB (중앙 허리)
    %% =========================================================
    state "03. TIMELINE & AUDIO (제어부)" as MID_AUDIO {
        BITWIG : Bitwig Studio
        ABLETON : Ableton Live (Timeline / Sync)
        MAX : Max / MSP

        ABLETON --> MAX : M4L Control
    }

    state "04. MAIN CORE HUB (터치디자이너 단독 허브)" as MID_CORE {
        TD : TouchDesigner\n(Central Hub / Media Server / Spatial)
    }

    %% =========================================================
    %% [BOTTOM LAYER] SPLIT OUTPUTS (독립된 아웃풋 섹션들)
    %% =========================================================
    state "05-A. MEDIA POST-PRODUCTION" as OUT_MEDIA {
        POST : After Effects / PS
        MEDIA_OUT : Final Media Render
        POST --> MEDIA_OUT
    }

    state "05-B. LIVE PERFORMANCE" as OUT_LIVE {
        LIVE_OUT : Live (Ableton / TD / Resolume)
    }

    state "05-C. PHYSICAL INSTALLATION" as OUT_INSTALL {
        INSTALL_OUT : Projection Mapping / Space
    }

    state "05-D. WEB SYSTEMS & ARCHIVE" as OUT_WEB {
        WEB_OUT : Web Canvas & Archive
    }

    %% =========================================================
    %% ROUTING 1 : TOP -> MIDDLE (데이터/제어 하강)
    %% =========================================================
    PY --> TD : System Logic 
    JS_TS --> OUT_WEB : Web App Logic
    JS_TS --> MAX : node.script Bridge
    STRUDEL --> ABLETON : Algorithmic MIDI
    TIDAL --> ABLETON : Algorithmic OSC
    
    CAVALRY --> TD : Motion Assets
    COMFY --> TD : Realtime GenAI Textures

    %% =========================================================
    %% ROUTING 2 : MIDDLE -> MIDDLE (수평 코어 뼈대 연동)
    %% =========================================================
    ABLETON --> TD : TDAbleton / OSC / MIDI (Parameter Sync)
    BITWIG --> TD : Audio & Sync
    MAX --> TD : Control Data

    %% =========================================================
    %% ROUTING 3 : TOP & MIDDLE -> BOTTOM (분할 아웃풋으로 분배)
    %% =========================================================
    BLENDER --> POST : 3D Render
    COMFY --> POST : Generated Media
    
    P5_GLSL --> OUT_WEB : Web Canvas Out
    TD --> OUT_LIVE : VJ / Media Server Out
    TD --> OUT_INSTALL : Interactive Space
    ABLETON --> OUT_LIVE : Master Audio Out
