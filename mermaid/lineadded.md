```mermaid

---
config:
  layout: elk
  elk:
    nodePlacementStrategy: BRANDES_KOEPF
    mergeEdges: true
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
    curve: basis
    nodeSpacing: 20
    rankSpacing: 50
---

flowchart TD

    %% =========================================================
    %% 1층: 4개 도메인 서브그래프 (가로로 나란히 배치)
    %% =========================================================

    subgraph VISUAL_BOX[" VISUAL "]
        direction TB
        subgraph V_TOOLS[" "]
            direction LR
            GENAI["GENAI"]
            CAVALRY["CAVALRY"]
            AE["AFTER EFFECTS"]
            BLENDER["BLENDER"]
        end
        subgraph V_METHODS[" "]
            direction LR
            VISUAL_GENERATIVE["GENERATIVE"]
            VISUAL_3D["3D"]
            VISUAL_2D["2D"]
        end
        VISUAL["VISUAL"]

        V_TOOLS --> V_METHODS --> VISUAL
    end

    subgraph AUDIO_BOX[" AUDIO "]
        direction TB
        subgraph A_TOOLS[" "]
            direction LR
            MAX["MAX"]
            BITWIG["BITWIG"]
        end
        subgraph A_METHODS[" "]
            direction LR
            AUDIO_SYNTHESIS["SYNTHESIS"]
            AUDIO_GENERATIVE["GENERATIVE"]
        end
        AUDIO["AUDIO"]

        A_TOOLS --> A_METHODS --> AUDIO
    end

    subgraph INTERACTIVE_BOX[" INTERACTIVE "]
        direction TB
        subgraph I_TOOLS[" "]
            direction LR
            HARDWARE["HARDWARE"]
            SENSORS["SENSORS"]
            TRACKING["TRACKING"]
        end
        INTERACTIVE["INTERACTIVE"]

        I_TOOLS --> INTERACTIVE
    end

    subgraph WEB_BOX[" WEB "]
        direction TB
        subgraph W_TOOLS[" "]
            direction LR
            SVELTE["SVELTE"]
            VITE["VITE"]
            WEB_AUDIO["WEB AUDIO"]
            P5["p5.js"]
        end
        WEB["WEB"]

        W_TOOLS --> WEB
    end

    %% 🔥 핵심: 서브그래프를 가로(Left to Right)로 나란히 정렬하도록 강제
    VISUAL_BOX ~~~ AUDIO_BOX ~~~ INTERACTIVE_BOX ~~~ WEB_BOX

    %% =========================================================
    %% 2층: CORE SYSTEM (중앙 수집)
    %% =========================================================

    subgraph CORE_BOX[" CORE SYSTEM "]
        direction LR
        TD["TOUCHDESIGNER"]
        MID["OSC / MIDI"]
        ABLETON["ABLETON LIVE"]

        TD <--> MID <--> ABLETON
    end

    %% 도메인에서 코어로 내려오는 연결선
    VISUAL --> TD
    INTERACTIVE --> TD
    INTERACTIVE --> ABLETON
    AUDIO --> ABLETON

    %% =========================================================
    %% 3층: OUTPUTS (최종 출력)
    %% =========================================================

    subgraph OUTPUT_BOX[" OUTPUTS "]
        direction LR
        MEDIA["MEDIA"]
        INTERACTIVE_OUT["INTERACTIVE"]
        INSTALLATION["INSTALLATION"]
        LIVE["LIVE"]

        MEDIA ~~~ INTERACTIVE_OUT ~~~ INSTALLATION ~~~ LIVE
    end

    %% 코어에서 출력으로 내려오는 연결선
    TD --> OUTPUT_BOX
    ABLETON --> OUTPUT_BOX
    WEB --> OUTPUT_BOX

    %% =========================================================
    %% STYLES & SUBGRAPH HIDDEN
    %% =========================================================

    style V_TOOLS fill:none,stroke:none
    style V_METHODS fill:none,stroke:none
    style A_TOOLS fill:none,stroke:none
    style A_METHODS fill:none,stroke:none
    style I_TOOLS fill:none,stroke:none
    style W_TOOLS fill:none,stroke:none

    style VISUAL_BOX fill:#111419,stroke:#262a30,color:#8e96a0
    style AUDIO_BOX fill:#14130f,stroke:#332b1a,color:#a08d68
    style INTERACTIVE_BOX fill:#111419,stroke:#262a30,color:#8e96a0
    style WEB_BOX fill:#111419,stroke:#262a30,color:#8e96a0
    style CORE_BOX fill:#0f151b,stroke:#1e353b,color:#55c3d2
    style OUTPUT_BOX fill:#141619,stroke:#3a3f47,color:#aeb5bd

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
