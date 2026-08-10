```mermaid

---
config:
  layout: elk
  elk:
    nodePlacementStrategy: BRANDES_KOEPF
    mergeEdges: false
  theme: base
  themeVariables:
    background: "#0d0f12"
    primaryColor: "#15181d"
    primaryTextColor: "#d7dbe0"
    primaryBorderColor: "#303640"
    lineColor: "#59616b"
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "13px"
  flowchart:
    curve: step
    nodeSpacing: 40
    rankSpacing: 70
---

flowchart TD

    %% =========================================================
    %% LAYER 1: INPUT TOOLS (최상단 동일 Y축 정렬)
    %% =========================================================

    subgraph LAYER_TOOLS[" "]
        direction LR
        GENAI["GENAI"]
        CAVALRY["CAVALRY"]
        AE["AFTER EFFECTS"]
        BLENDER["BLENDER"]
        HARDWARE["HARDWARE"]
        SENSORS["SENSORS"]
        TRACKING["TRACKING"]
        MAX["MAX"]
        BITWIG["BITWIG"]
        SVELTE["SVELTE"]
        VITE["VITE"]
        WEB_AUDIO["WEB AUDIO"]
        P5["p5.js"]
    end

    %% =========================================================
    %% LAYER 2: METHODS
    %% =========================================================

    subgraph VISUAL_METHOD[" "]
        direction TB
        VISUAL_GENERATIVE["GENERATIVE"]
        VISUAL_3D["3D"]
        VISUAL_2D["2D"]
        VISUAL_GENERATIVE ~~~ VISUAL_3D ~~~ VISUAL_2D
    end

    subgraph AUDIO_METHOD[" "]
        direction TB
        AUDIO_SYNTHESIS["SYNTHESIS"]
        AUDIO_GENERATIVE["GENERATIVE"]
        AUDIO_SYNTHESIS ~~~ AUDIO_GENERATIVE
    end

    GENAI & CAVALRY & AE & BLENDER --> VISUAL_METHOD
    MAX & BITWIG --> AUDIO_METHOD

    %% =========================================================
    %% LAYER 3: DOMAINS (동일 Y축 정렬)
    %% =========================================================

    subgraph LAYER_DOMAINS[" "]
        direction LR
        VISUAL["VISUAL"]
        INTERACTIVE["INTERACTIVE"]
        AUDIO["AUDIO"]
        WEB["WEB"]
    end

    VISUAL_METHOD --> VISUAL
    HARDWARE & SENSORS & TRACKING --> INTERACTIVE
    AUDIO_METHOD --> AUDIO
    SVELTE & VITE & WEB_AUDIO & P5 --> WEB

    %% =========================================================
    %% LAYER 4: CORE ENGINES (동일 Y축 정렬)
    %% =========================================================

    subgraph LAYER_CORE[" "]
        direction LR
        TD["TOUCHDESIGNER"]
        MID["OSC / MIDI"]
        ABLETON["ABLETON LIVE"]
    end

    VISUAL --> TD
    INTERACTIVE --> TD
    INTERACTIVE --> ABLETON
    AUDIO --> ABLETON

    TD <--> MID <--> ABLETON

    %% =========================================================
    %% LAYER 5: SIGNAL & OUTPUT (최하단 동일 Y축 정렬)
    %% =========================================================

    SIGNAL[" "]

    TD --> SIGNAL
    ABLETON --> SIGNAL
    WEB --> SIGNAL

    subgraph OUTPUT[" "]
        direction LR
        MEDIA["MEDIA"]
        INTERACTIVE_OUT["INTERACTIVE"]
        INSTALLATION["INSTALLATION"]
        LIVE["LIVE"]
        MEDIA ~~~ INTERACTIVE_OUT ~~~ INSTALLATION ~~~ LIVE
    end

    SIGNAL --> OUTPUT

    %% =========================================================
    %% HIDDEN SUBGRAPH STYLES (레이어 틀 숨김)
    %% =========================================================

    style LAYER_TOOLS fill:none,stroke:none
    style VISUAL_METHOD fill:none,stroke:none
    style AUDIO_METHOD fill:none,stroke:none
    style LAYER_DOMAINS fill:none,stroke:none
    style LAYER_CORE fill:none,stroke:none
    style SIGNAL fill:none,stroke:none
    style OUTPUT fill:none,stroke:none

    %% =========================================================
    %% COMPONENT STYLES
    %% =========================================================

    classDef domain fill:#111419,stroke:#737b84,color:#f0f2f4,stroke-width:2px,font-size:13px;
    classDef visualTool fill:#17191d,stroke:#69747e,color:#e6eaed,stroke-width:2px,font-size:11px;
    classDef visualMethod fill:#17191d,stroke:#69747e,color:#e6eaed,stroke-width:2px,font-size:11px;
    classDef audioTool fill:#191813,stroke:#9c8245,color:#fff7df,stroke-width:2px,font-size:11px;
    classDef audioMethod fill:#191813,stroke:#9c8245,color:#fff7df,stroke-width:2px,font-size:11px;
    classDef coreTD fill:#10191b,stroke:#55c3d2,color:#eefbfc,stroke-width:3px,font-size:14px;
    classDef coreAudio fill:#191813,stroke:#c19a45,color:#fff7df,stroke-width:3px,font-size:14px;
    classDef communication fill:#16151b,stroke:#9b7bd3,color:#eee8ff,stroke-width:1px,font-size:7px;
    classDef webTool fill:#15181d,stroke:#69747e,color:#e6eaed,stroke-width:2px,font-size:11px;
    classDef output fill:#17191d,stroke:#aeb5bd,color:#f1f3f5,stroke-width:4px,font-size:22px;

    class VISUAL,AUDIO,INTERACTIVE,WEB domain;
    class GENAI,CAVALRY,AE,BLENDER visualTool;
    class VISUAL_GENERATIVE,VISUAL_3D,VISUAL_2D visualMethod;
    class MAX,BITWIG audioTool;
    class AUDIO_SYNTHESIS,AUDIO_GENERATIVE audioMethod;
    class HARDWARE,SENSORS,TRACKING domain;
    class SVELTE,VITE,WEB_AUDIO,P5 webTool;
    class TD coreTD;
    class ABLETON coreAudio;
    class MID communication;
    class MEDIA,INTERACTIVE_OUT,INSTALLATION,LIVE output;
