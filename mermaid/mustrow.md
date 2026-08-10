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
    nodeSpacing: 15
    rankSpacing: 50
---

flowchart TD

    %% =========================================================
    %% 1열: VISUAL COLUMN
    %% =========================================================
    subgraph COL_VISUAL[" VISUAL TRACK "]
        direction TB
        GENAI["GENAI"]
        CAVALRY["CAVALRY"]
        AE["AFTER EFFECTS"]
        BLENDER["BLENDER"]

        subgraph V_METHODS[" "]
            direction TB
            VISUAL_GENERATIVE["GENERATIVE"]
            VISUAL_3D["3D"]
            VISUAL_2D["2D"]
            VISUAL_GENERATIVE ~~~ VISUAL_3D ~~~ VISUAL_2D
        end

        VISUAL["VISUAL"]

        GENAI & CAVALRY & AE & BLENDER --> V_METHODS --> VISUAL
    end

    %% =========================================================
    %% 2열: AUDIO COLUMN
    %% =========================================================
    subgraph COL_AUDIO[" AUDIO TRACK "]
        direction TB
        MAX["MAX"]
        BITWIG["BITWIG"]

        subgraph A_METHODS[" "]
            direction TB
            AUDIO_SYNTHESIS["SYNTHESIS"]
            AUDIO_GENERATIVE["GENERATIVE"]
            AUDIO_SYNTHESIS ~~~ AUDIO_GENERATIVE
        end

        AUDIO["AUDIO"]

        MAX & BITWIG --> A_METHODS --> AUDIO
    end

    %% =========================================================
    %% 3열: INTERACTIVE COLUMN
    %% =========================================================
    subgraph COL_INTERACTIVE[" INTERACTIVE TRACK "]
        direction TB
        HARDWARE["HARDWARE"]
        SENSORS["SENSORS"]
        TRACKING["TRACKING"]

        I_DUMMY[" "]

        INTERACTIVE["INTERACTIVE"]

        HARDWARE & SENSORS & TRACKING --> I_DUMMY --> INTERACTIVE
    end

    %% =========================================================
    %% 4열: WEB COLUMN
    %% =========================================================
    subgraph COL_WEB[" WEB TRACK "]
        direction TB
        SVELTE["SVELTE"]
        VITE["VITE"]
        WEB_AUDIO["WEB AUDIO"]
        P5["p5.js"]

        W_DUMMY[" "]

        WEB["WEB"]

        SVELTE & VITE & WEB_AUDIO & P5 --> W_DUMMY --> WEB
    end

    %% 🔥 [핵심] 4개 열(Column)을 가로로 나란히 배치하도록 수평 강제 고정
    GENAI ~~~ MAX ~~~ HARDWARE ~~~ SVELTE
    VISUAL ~~~ AUDIO ~~~ INTERACTIVE ~~~ WEB

    %% =========================================================
    %% 하단 CORE ENGINES
    %% =========================================================
    subgraph CORE[" CORE SYSTEM "]
        direction LR
        TD["TOUCHDESIGNER"]
        MID["OSC / MIDI"]
        ABLETON["ABLETON LIVE"]

        TD <--> MID <--> ABLETON
    end

    %% =========================================================
    %% 최하단 OUTPUTS
    %% =========================================================
    SIGNAL[" "]

    subgraph OUTPUT[" OUTPUTS "]
        direction LR
        MEDIA["MEDIA"]
        INTERACTIVE_OUT["INTERACTIVE"]
        INSTALLATION["INSTALLATION"]
        LIVE["LIVE"]
        MEDIA ~~~ INTERACTIVE_OUT ~~~ INSTALLATION ~~~ LIVE
    end

    %% =========================================================
    %% 주요 연결선
    %% =========================================================
    VISUAL --> TD
    AUDIO --> ABLETON
    INTERACTIVE --> TD
    INTERACTIVE --> ABLETON

    TD --> SIGNAL
    ABLETON --> SIGNAL
    WEB --> SIGNAL

    SIGNAL --> OUTPUT

    %% =========================================================
    %% 숨김 및 스타일링
    %% =========================================================
    style V_METHODS fill:none,stroke:none
    style A_METHODS fill:none,stroke:none
    style I_DUMMY fill:none,stroke:none
    style W_DUMMY fill:none,stroke:none
    style SIGNAL fill:none,stroke:none
    style OUTPUT fill:none,stroke:none

    style COL_VISUAL fill:#111419,stroke:#2d333b,color:#a0a8b3
    style COL_AUDIO fill:#14130f,stroke:#3b3323,color:#b8a379
    style COL_INTERACTIVE fill:#111419,stroke:#2d333b,color:#a0a8b3
    style COL_WEB fill:#111419,stroke:#2d333b,color:#a0a8b3
    style CORE fill:#0f151b,stroke:#1e353b,color:#55c3d2

    %% =========================================================
    %% CLASS STYLES
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
    classDef output fill:#17191d,stroke:#aeb5bd,color:#f1f3f5,stroke-width:2px,font-size:13px;

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
