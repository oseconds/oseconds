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
    nodeSpacing: 20
    rankSpacing: 60
---

flowchart TD

    %% =========================================================
    %% [1층 - 최상단 폭넓은 레이어] 4개 트랙 가로 전개
    %% =========================================================

    subgraph TOP_LAYER[" "]
        direction LR

        subgraph SUB_VISUAL[" VISUAL "]
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

        subgraph SUB_AUDIO[" AUDIO "]
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

        subgraph SUB_INTERACTIVE[" INTERACTIVE "]
            direction TB
            HARDWARE["HARDWARE"]
            SENSORS["SENSORS"]
            TRACKING["TRACKING"]

            INTERACTIVE["INTERACTIVE"]

            HARDWARE & SENSORS & TRACKING --> INTERACTIVE
        end

        subgraph SUB_WEB[" WEB "]
            direction TB
            SVELTE["SVELTE"]
            VITE["VITE"]
            WEB_AUDIO["WEB AUDIO"]
            P5["p5.js"]

            WEB["WEB"]

            SVELTE & VITE & WEB_AUDIO & P5 --> WEB
        end
    end


    %% =========================================================
    %% [2층 - 중앙 모임] CORE ENGINE (확대 및 정중앙 집중)
    %% =========================================================

    subgraph CORE[" CORE SYSTEM "]
        direction LR
        TD["TOUCHDESIGNER"]
        MID["OSC / MIDI"]
        ABLETON["ABLETON LIVE"]

        TD <--> MID <--> ABLETON
    end


    %% =========================================================
    %% [3층 - 최하단] OUTPUTS (넓은 와이드 앵커)
    %% =========================================================

    subgraph OUTPUT[" OUTPUTS "]
        direction LR
        MEDIA["MEDIA"]
        INTERACTIVE_OUT["INTERACTIVE"]
        INSTALLATION["INSTALLATION"]
        LIVE["LIVE"]

        MEDIA ~~~ INTERACTIVE_OUT ~~~ INSTALLATION ~~~ LIVE
    end


    %% =========================================================
    %% 역피라미드 수렴 연결선
    %% =========================================================

    VISUAL --> TD
    AUDIO --> ABLETON
    INTERACTIVE --> TD
    INTERACTIVE --> ABLETON

    TD --> OUTPUT
    ABLETON --> OUTPUT
    WEB --> OUTPUT


    %% =========================================================
    %% 스타일링 (Core & Output 노드 크기 및 테두리 대폭 확대)
    %% =========================================================

    style TOP_LAYER fill:none,stroke:none
    style V_METHODS fill:none,stroke:none
    style A_METHODS fill:none,stroke:none

    style SUB_VISUAL fill:#111419,stroke:#2d333b,color:#a0a8b3
    style SUB_AUDIO fill:#14130f,stroke:#3b3323,color:#b8a379
    style SUB_INTERACTIVE fill:#111419,stroke:#2d333b,color:#a0a8b3
    style SUB_WEB fill:#111419,stroke:#2d333b,color:#a0a8b3

    style CORE fill:#0f1d22,stroke:#55c3d2,stroke-width:3px,color:#eefbfc
    style OUTPUT fill:#181b20,stroke:#aeb5bd,stroke-width:3px,color:#f1f3f5

    classDef domain fill:#111419,stroke:#737b84,color:#f0f2f4,stroke-width:2px,font-size:13px;
    classDef visualTool fill:#17191d,stroke:#69747e,color:#e6eaed,stroke-width:2px,font-size:11px;
    classDef visualMethod fill:#17191d,stroke:#69747e,color:#e6eaed,stroke-width:2px,font-size:11px;
    classDef audioTool fill:#191813,stroke:#9c8245,color:#fff7df,stroke-width:2px,font-size:11px;
    classDef audioMethod fill:#191813,stroke:#9c8245,color:#fff7df,stroke-width:2px,font-size:11px;
    classDef webTool fill:#15181d,stroke:#69747e,color:#e6eaed,stroke-width:2px,font-size:11px;

    %% 코어 및 아웃풋 노드 폰트/크기 강조
    classDef coreTD fill:#102226,stroke:#55c3d2,color:#ffffff,stroke-width:3px,font-size:16px;
    classDef coreAudio fill:#262215,stroke:#c19a45,color:#ffffff,stroke-width:3px,font-size:16px;
    classDef communication fill:#1b1824,stroke:#9b7bd3,color:#eee8ff,stroke-width:2px,font-size:11px;

    classDef output fill:#20242b,stroke:#aeb5bd,color:#ffffff,stroke-width:3px,font-size:15px;

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
