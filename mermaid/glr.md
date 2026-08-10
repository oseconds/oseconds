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
    nodeSpacing: 25
    rankSpacing: 50
---

flowchart LR

    %% =========================================================
    %% STREAM 1: VISUAL (가로 레인 1)
    %% =========================================================
    subgraph STREAM_VISUAL[" VISUAL STREAM "]
        direction LR
        subgraph TOOLS_VISUAL[" "]
            direction TB
            GENAI["GENAI"]
            CAVALRY["CAVALRY"]
            AE["AFTER EFFECTS"]
            BLENDER["BLENDER"]
        end
        
        subgraph METHODS_VISUAL[" "]
            direction TB
            VISUAL_GENERATIVE["GENERATIVE"]
            VISUAL_3D["3D"]
            VISUAL_2D["2D"]
        end
        
        VISUAL["VISUAL"]
        
        TOOLS_VISUAL --> METHODS_VISUAL --> VISUAL
    end

    %% =========================================================
    %% STREAM 2: AUDIO (가로 레인 2)
    %% =========================================================
    subgraph STREAM_AUDIO[" AUDIO STREAM "]
        direction LR
        subgraph TOOLS_AUDIO[" "]
            direction TB
            MAX["MAX"]
            BITWIG["BITWIG"]
        end
        
        subgraph METHODS_AUDIO[" "]
            direction TB
            AUDIO_SYNTHESIS["SYNTHESIS"]
            AUDIO_GENERATIVE["GENERATIVE"]
        end
        
        AUDIO["AUDIO"]
        
        TOOLS_AUDIO --> METHODS_AUDIO --> AUDIO
    end

    %% =========================================================
    %% STREAM 3: INTERACTIVE (가로 레인 3)
    %% =========================================================
    subgraph STREAM_INTERACTIVE[" INTERACTIVE STREAM "]
        direction LR
        subgraph TOOLS_INTERACTIVE[" "]
            direction TB
            HARDWARE["HARDWARE"]
            SENSORS["SENSORS"]
            TRACKING["TRACKING"]
        end
        
        INTERACTIVE["INTERACTIVE"]
        
        TOOLS_INTERACTIVE --> INTERACTIVE
    end

    %% =========================================================
    %% STREAM 4: WEB (가로 레인 4)
    %% =========================================================
    subgraph STREAM_WEB[" WEB STREAM "]
        direction LR
        subgraph TOOLS_WEB[" "]
            direction TB
            SVELTE["SVELTE"]
            VITE["VITE"]
            WEB_AUDIO["WEB AUDIO"]
            P5["p5.js"]
        end
        
        WEB["WEB"]
        
        TOOLS_WEB --> WEB
    end

    %% =========================================================
    %% CORE SYSTEM (중앙 수집)
    %% =========================================================
    subgraph CORE[" CORE ENGINES "]
        direction TB
        TD["TOUCHDESIGNER"]
        MID["OSC / MIDI"]
        ABLETON["ABLETON LIVE"]
        
        TD <--> MID <--> ABLETON
    end

    %% =========================================================
    %% OUTPUTS (최종 출력)
    %% =========================================================
    subgraph OUTPUT[" OUTPUTS "]
        direction TB
        MEDIA["MEDIA"]
        INTERACTIVE_OUT["INTERACTIVE"]
        INSTALLATION["INSTALLATION"]
        LIVE["LIVE"]
    end

    %% =========================================================
    %% MAIN CONNECTIONS (주요 연결)
    %% =========================================================
    VISUAL --> TD
    INTERACTIVE --> TD
    INTERACTIVE --> ABLETON
    AUDIO --> ABLETON
    
    TD --> OUTPUT
    ABLETON --> OUTPUT
    WEB --> OUTPUT

    %% =========================================================
    %% STYLES & SUBGRAPH HIDDEN
    %% =========================================================
    style TOOLS_VISUAL fill:none,stroke:none
    style METHODS_VISUAL fill:none,stroke:none
    style TOOLS_AUDIO fill:none,stroke:none
    style METHODS_AUDIO fill:none,stroke:none
    style TOOLS_INTERACTIVE fill:none,stroke:none
    style TOOLS_WEB fill:none,stroke:none

    style STREAM_VISUAL fill:#111419,stroke:#262a30,color:#8e96a0
    style STREAM_AUDIO fill:#14130f,stroke:#332b1a,color:#a08d68
    style STREAM_INTERACTIVE fill:#111419,stroke:#262a30,color:#8e96a0
    style STREAM_WEB fill:#111419,stroke:#262a30,color:#8e96a0
    style CORE fill:#0f151b,stroke:#1e353b,color:#55c3d2
    style OUTPUT fill:#141619,stroke:#3a3f47,color:#aeb5bd

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
