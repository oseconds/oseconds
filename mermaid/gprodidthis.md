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
    %% [BACKBONE SKELETON] 레이아웃 수직 정렬 강제 뼈대
    %% =========================================================
    TOP_SCRIPT --> MID_AUDIO
    TOP_VISUAL --> MID_CORE
    MID_AUDIO --> BOT_OUT
    MID_CORE --> BOT_OUT

    %% =========================================================
    %% [TOP LAYER] SOURCE & LOGIC (최상단)
    %% =========================================================
    state "01. CODE & LIVE SCRIPTING" as TOP_SCRIPT {
        PY : Python (Data / Logic)
        JS_TS : JavaScript / TypeScript
        STRUDEL : Strudel (JS Live Coding)
        TIDAL : TidalCycles
        
        JS_TS --> STRUDEL : Engine Base
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

    state "04. MAIN CORE HUB (통합부)" as MID_CORE {
        TD : TouchDesigner\n(Central Hub / Media Server)
        P5_GLSL : p5.js / GLSL
    }

    %% =========================================================
    %% [BOTTOM LAYER] TARGET OUTPUTS (하단 중앙 각잡기)
    %% =========================================================
    state "05. CREATIVE OUTPUTS (종착지)" as BOT_OUT {
        
        state "Pre-Rendered Media Pipeline" as BOT_MEDIA {
            POST : After Effects / PS
            MEDIA_OUT : Final Media
            POST --> MEDIA_OUT : Final Render
        }
        
        state "Realtime & Spatial Outputs" as BOT_REALTIME {
            LIVE_OUT : Live (Ableton / TD / Resolume)
            INSTALL_OUT : Physical Installation
            WEB_OUT : Web Systems & Archive
        }
    }

    %% =========================================================
    %% ROUTING 1 : TOP -> MIDDLE (데이터/제어 하강)
    %% =========================================================
    PY --> TD : System Logic 
    JS_TS --> P5_GLSL : Web App Logic
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
    %% ROUTING 3 : TOP & MIDDLE -> BOTTOM (최종 출력 분배)
    %% =========================================================
    BLENDER --> POST : 3D Render
    COMFY --> POST : Generated Media
    
    P5_GLSL --> WEB_OUT : Web Canvas Out
    TD --> LIVE_OUT : VJ / Media Server Out
    TD --> INSTALL_OUT : Projection / Interactive Space
    ABLETON --> LIVE_OUT : Master Audio Out
