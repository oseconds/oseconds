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
    nodeSpacing: 35
    rankSpacing: 65
---

flowchart TD

    %% =========================================================
    %% [6층 - 최상단] TOOLS (Hop 5 from Bottom)
    %% =========================================================
    GENAI["GENAI"]
    CAVALRY["CAVALRY"]
    AE["AFTER EFFECTS"]
    BLENDER["BLENDER"]

    MAX["MAX"]
    BITWIG["BITWIG"]

    HARDWARE["HARDWARE"]
    SENSORS["SENSORS"]
    TRACKING["TRACKING"]

    SVELTE["SVELTE"]
    VITE["VITE"]
    WEB_AUDIO["WEB AUDIO"]
    P5["p5.js"]


    %% =========================================================
    %% [5층] METHODS & 1차 높이 보정 앵커 (Hop 4 from Bottom)
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

    %% Interactive와 Web의 층수를 맞추기 위한 1차 투명 앵커
    INTERACTIVE_A1[" "]
    WEB_A1[" "]

    GENAI & CAVALRY & AE & BLENDER --> VISUAL_METHOD
    MAX & BITWIG --> AUDIO_METHOD
    HARDWARE & SENSORS & TRACKING --> INTERACTIVE_A1
    SVELTE & VITE & WEB_AUDIO & P5 --> WEB_A1


    %% =========================================================
    %% [4층] DOMAINS (Hop 3 from Bottom)
    %% =========================================================
    VISUAL["VISUAL"]
    AUDIO["AUDIO"]
    INTERACTIVE["INTERACTIVE"]
    WEB["WEB"]

    VISUAL_METHOD --> VISUAL
    AUDIO_METHOD --> AUDIO
    INTERACTIVE_A1 --> INTERACTIVE
    WEB_A1 --> WEB


    %% =========================================================
    %% [3층] CORE ENGINES & 2차 높이 보정 앵커 (Hop 2 from Bottom)
    %% =========================================================
    TD["TOUCHDESIGNER"]
    MID["OSC / MIDI"]
    ABLETON["ABLETON LIVE"]

    %% Web 신호가 Core 층을 통과할 때 높이를 맞춰주는 2차 투명 앵커
    WEB_A2[" "]

    VISUAL --> TD
    AUDIO --> ABLETON
    INTERACTIVE --> TD
    INTERACTIVE --> ABLETON
    WEB --> WEB_A2

    TD <--> MID <--> ABLETON


    %% =========================================================
    %% [2층] SIGNAL HUB (Hop 1 from Bottom)
    %% =========================================================
    SIGNAL[" "]

    TD --> SIGNAL
    ABLETON --> SIGNAL
    WEB_A2 --> SIGNAL


    %% =========================================================
    %% [1층 - 최하단] OUTPUTS (Target Rank 0)
    %% =========================================================
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
    %% 가로 수평 위치 고정을 위한 연결 구문
    %% =========================================================
    VISUAL ~~~ INTERACTIVE ~~~ AUDIO ~~~ WEB


    %% =========================================================
    %% HIDDEN ANCHOR STYLES (앵커 및 더미 박스 숨김)
    %% =========================================================
    style VISUAL_METHOD fill:none,stroke:none
    style AUDIO_METHOD fill:none,stroke:none
    style INTERACTIVE_A1 fill:none,stroke:none
    style WEB_A1 fill:none,stroke:none
    style WEB_A2 fill:none,stroke:none
    style SIGNAL fill:none,stroke:none
    style OUTPUT fill:none,stroke:none


    %% =========================================================
    %% STYLES
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
