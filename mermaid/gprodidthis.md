```mermaid

---
config:
  state:
    titleTopMargin: 10
    dividerMargin: 8
    padding: 10
    nodeSpacing: 15
    rankSpacing: 20
---

stateDiagram-v2
    direction TB

    %% =========================================================
    %% [TOP LAYER] 소스 생성 및 로직 (위에서 아래로 데이터 공급)
    %% =========================================================
    state "01. CODE & LIVE SCRIPTING" as TOP_SCRIPT {
        JS_TS : JavaScript / TypeScript
        PY : Python
        STRUDEL : Strudel (JS Live Coding)
        TIDAL : TidalCycles
    }

    state "02. VISUAL & AI ASSETS (통합 에셋)" as TOP_VISUAL {
        BLENDER : Blender (3D / Camera Data)
        CAVALRY : Cavalry (2D Motion)
        AI_MODELS : GenAI (FLUX / SD / Kling)
        COMFY : ComfyUI Workflows

        %% 3D Data to AI flow
        BLENDER --> AI_MODELS : Depth / Structure / Camera
        AI_MODELS --> COMFY
    }

    %% =========================================================
    %% [MIDDLE LAYER] 컨트롤 및 메인 허브 (나란히 배치)
    %% =========================================================
    state "03. TIMELINE & AUDIO (제어부)" as MID_AUDIO {
        ABLETON : Ableton Live (Timeline / Live Control)
        MAX : Max / MSP
        BITWIG : Bitwig Studio

        ABLETON --> MAX
    }

    state "04. MAIN CORE HUB (통합부)" as MID_CORE {
        TD : TouchDesigner (Central Hub / Media Server)
        P5_GLSL : p5.js / GLSL
    }

    %% =========================================================
    %% [BOTTOM LAYER] 최종 아웃풋 (가장 아래에 위치)
    %% =========================================================
    state "05. CREATIVE OUTPUTS (종착지)" as BOT_OUT {
        POST : After Effects / PS
        MEDIA_OUT : Final Media
        LIVE_OUT : Live Performance (Ableton / TD / Resolume)
        INSTALL_OUT : Physical Installation
        WEB_OUT : Web Systems & Archive

        POST --> MEDIA_OUT
    }

    %% =========================================================
    %% FLOW ROUTING (위 -> 중간 -> 아래 흐름 고정)
    %% =========================================================

    %% 1. Top -> Middle (데이터 및 스크립트 전송)
    JS_TS --> P5_GLSL : Web App Logic
    PY --> TD : System Logic & Data Processing
    MAX <--> JS_TS : node.script Bridge
    STRUDEL --> ABLETON : Algorithmic MIDI
    TIDAL --> ABLETON : Algorithmic OSC

    %% 2. Top -> Middle & Bottom (에셋 및 미디어 흐름)
    CAVALRY --> TD : Motion Assets
    BLENDER --> POST : 3D Render to Post
    COMFY --> TD : Realtime Textures (GenAI)
    COMFY --> POST : Generated Media to Post

    %% 3. Middle <-> Middle (에이블톤 -> 터치디자이너 핵심 연동)
    ABLETON --> TD : TDAbleton / OSC / MIDI (Timeline & Parameter Sync)
    BITWIG --> TD : Audio & Sync
    MAX --> TD : Control Data

    %% 4. Middle -> Bottom (허브에서 최종 아웃풋으로 분배)
    P5_GLSL --> WEB_OUT
    TD --> LIVE_OUT : VJ / Media Server Output
    TD --> INSTALL_OUT : Projection Mapping / Interactive Space
    ABLETON --> LIVE_OUT : Live Audio Output
