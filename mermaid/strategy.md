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
    nodeSpacing: 25
    rankSpacing: 55
---

flowchart TD

    %% =========================================================
    %% [LEVEL 1] INPUT TOOLS (최상단 가로 행)
    %% =========================================================
    subgraph LEVEL_1_TOOLS[" 1. INPUT TOOLS "]
        direction LR
        
        subgraph T_VISUAL[" "]
            direction LR
            GENAI["GENAI"]
            CAVALRY["CAVALRY"]
            AE["AFTER EFFECTS"]
            BLENDER["BLENDER"]
        end

        subgraph T_AUDIO[" "]
            direction LR
            MAX["MAX"]
            BITWIG["BITWIG"]
        end

        subgraph T_INTERACTIVE[" "]
            direction LR
            HARDWARE["HARDWARE"]
            SENSORS["SENSORS"]
            TRACKING["TRACKING"]
        end

        subgraph T_WEB[" "]
            direction LR
            SVELTE["SVELTE"]
            VITE["VITE"]
            WEB_AUDIO["WEB AUDIO"]
            P5["p5.js"]
        end
    end


    %% =========================================================
    %% [LEVEL 2] METHODS (중간 가로 행 - 높이 맞춤용 앵커 포함)
    %% =========================================================
    subgraph LEVEL_2_METHODS[" 2. PROCESSING / METHODS "]
        direction LR

        subgraph V_M[" "]
            direction TB
            V_GEN["GENERATIVE"]
            V_3D["3D"]
            V_2D["2D"]
            V_GEN ~~~ V_3D ~~~ V_2D
        end

        subgraph A_M[" "]
            direction TB
            A_SYN["SYNTHESIS"]
            A_GEN["GENERATIVE"]
            A_SYN ~~~ A_GEN
        end

        %% Interactive와 Web의 Y축 레벨을 맞추기 위한 투명 더미 앵커
        I_DUMMY[" "]
        W_DUMMY[" "]
    end


    %% =========================================================
    %% [LEVEL 3] DOMAINS (동일 Y축 완벽 고정 행)
    %% =========================================================
    subgraph LEVEL_3_DOMAINS[" 3. DOMAINS "]
        direction LR
        VISUAL["VISUAL"]
        AUDIO["AUDIO"]
        INTERACTIVE["INTERACTIVE"]
        WEB["WEB"]
    end


    %% =========================================================
    %% [LEVEL 4] CORE SYSTEM
    %% =========================================================
    subgraph LEVEL_4_CORE[" 4. CORE SYSTEM "]
        direction LR
        TD["TOUCHDESIGNER"]
        MID["OSC / MIDI"]
        ABLETON["ABLETON LIVE"]

        TD <--> MID <--> ABLETON
    end


    %% =========================================================
    %% [LEVEL 5] OUTPUTS
    %% =========================================================
    subgraph LEVEL_5_OUTPUTS[" 5. OUTPUTS "]
        direction LR
        MEDIA["MEDIA"]
        INTERACTIVE_OUT["INTERACTIVE"]
        INSTALLATION["INSTALLATION"]
        LIVE["LIVE"]

        MEDIA ~~~ INTERACTIVE_OUT ~~~ INSTALLATION ~~~ LIVE
    end


    %% =========================================================
    %% CONNECTIONS (레벨간 세로 흐름 연결)
    %% =========================================================

    %% Level 1 -> Level 2
    T_VISUAL --> V_M
    T_AUDIO --> A_M
    T_INTERACTIVE --> I_DUMMY
    T_WEB --> W_DUMMY

    %% Level 2 -> Level 3
    V_M --> VISUAL
    A_M --> AUDIO
    I_DUMMY --> INTERACTIVE
    W_DUMMY --> WEB

    %% Level 3 -> Level 4
    VISUAL --> TD
    AUDIO --> ABLETON
    INTERACTIVE --> TD
    INTERACTIVE --> ABLETON
    WEB --> LEVEL_4_CORE

    %% Level 4 -> Level 5
    TD --> LEVEL_5_OUTPUTS
    ABLETON --> LEVEL_5_OUTPUTS


    %% =========================================================
    %% STYLES & HIDDEN NODES
    %% =========================================================
    style T_VISUAL fill:none,stroke:none
    style T_AUDIO fill:none,stroke:none
    style T_INTERACTIVE fill:none,stroke:none
    style T_WEB fill:none,stroke:none
    style V_M fill:none,stroke:none
    style A_M fill:none,stroke:none
    style I_DUMMY fill:none,stroke:none
    style W_DUMMY fill:none,stroke:none

    style LEVEL_1_TOOLS fill:#111419,stroke:#262a30,color:#8e96a0
    style LEVEL_2_METHODS fill:#111419,stroke:#262a30,color:#8e96a0
    style LEVEL_3_DOMAINS fill:#161a22,stroke:#414b59,color:#ffffff,stroke-width:2px
    style LEVEL_4_CORE fill:#0b1619,stroke:#55c3d2,color:#eefbfc
    style LEVEL_5_OUTPUTS fill:#14171a,stroke:#aeb5bd,color:#f1f3f5

    classDef domain fill:#111419,stroke:#737b84,color:#f0f2f4,stroke-width:2px,font-size:13px;
    classDef visualTool fill:#17191d,stroke:#69747e,color:#e6eaed,stroke-width:2px,font-size:11px;
    classDef visualMethod fill:#17191d,stroke:#69747e,color:#e6eaed,stroke-width:2px,font-size:11px;
    classDef audioTool fill:#191813,stroke:#9c8245,color:#fff7df,stroke-width:2px,font-size:11px;
    classDef audioMethod fill:#191813,stroke:#9c8245,color:#fff7df,stroke-width:2px,font-size:11px;
    classDef webTool fill:#15181d,stroke:#69747e,color:#e6eaed,stroke-width:2px,font-size:11px;

    classDef coreTD fill:#102226,stroke:#55c3d2,color:#ffffff,stroke-width:3px,font-size:15px,min-width:150px;
    classDef coreAudio fill:#262215,stroke:#c19a45,color:#ffffff,stroke-width:3px,font-size:15px,min-width:150px;
    classDef communication fill:#1b1824,stroke:#9b7bd3,color:#eee8ff,stroke-width:2px,font-size:11px;
    classDef output fill:#20242b,stroke:#aeb5bd,color:#ffffff,stroke-width:3px,font-size:14px;

    class VISUAL,AUDIO,INTERACTIVE,WEB domain;
    class GENAI,CAVALRY,AE,BLENDER visualTool;
    class V_GEN,V_3D,V_2D visualMethod;
    class MAX,BITWIG audioTool;
    class A_SYN,A_GEN audioMethod;
    class HARDWARE,SENSORS,TRACKING domain;
    class SVELTE,VITE,WEB_AUDIO,P5 webTool;

    class TD coreTD;
    class ABLETON coreAudio;
    class MID communication;
    class MEDIA,INTERACTIVE_OUT,INSTALLATION,LIVE output;
