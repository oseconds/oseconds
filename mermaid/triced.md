```mermaid

flowchart TD

    %% =========================================================
    %% [1층 - 상단 넓은 4개 트랙] (루트 배치 + 독립 서브그래프)
    %% =========================================================

    subgraph V_TRACK[" VISUAL "]
        direction TB
        GENAI["GENAI"]
        CAVALRY["CAVALRY"]
        AE["AFTER EFFECTS"]
        BLENDER["BLENDER"]

        subgraph V_M[" "]
            direction TB
            V_GEN["GENERATIVE"]
            V_3D["3D"]
            V_2D["2D"]
            V_GEN ~~~ V_3D ~~~ V_2D
        end

        VISUAL["VISUAL"]

        GENAI & CAVALRY & AE & BLENDER --> V_M --> VISUAL
    end

    subgraph A_TRACK[" AUDIO "]
        direction TB
        MAX["MAX"]
        BITWIG["BITWIG"]

        subgraph A_M[" "]
            direction TB
            A_SYN["SYNTHESIS"]
            A_GEN["GENERATIVE"]
            A_SYN ~~~ A_GEN
        end

        AUDIO["AUDIO"]

        MAX & BITWIG --> A_M --> AUDIO
    end

    subgraph I_TRACK[" INTERACTIVE "]
        direction TB
        HARDWARE["HARDWARE"]
        SENSORS["SENSORS"]
        TRACKING["TRACKING"]

        INTERACTIVE["INTERACTIVE"]

        HARDWARE & SENSORS & TRACKING --> INTERACTIVE
    end

    subgraph W_TRACK[" WEB "]
        direction TB
        SVELTE["SVELTE"]
        VITE["VITE"]
        WEB_AUDIO["WEB AUDIO"]
        P5["p5.js"]

        WEB["WEB"]

        SVELTE & VITE & WEB_AUDIO & P5 --> WEB
    end

    %% 🔥 [트릭 1 & 2] 각 분야의 최상단/최하단 노드를 가로로 묶어 무조건 수평 정렬
    GENAI ~~~ MAX ~~~ HARDWARE ~~~ SVELTE
    VISUAL ~~~ AUDIO ~~~ INTERACTIVE ~~~ WEB

    %% =========================================================
    %% [2층 - 중앙 모임] CORE ENGINES
    %% =========================================================

    subgraph CORE[" CORE SYSTEM "]
        direction LR
        TD["TOUCHDESIGNER"]
        MID["OSC / MIDI"]
        ABLETON["ABLETON LIVE"]

        TD <--> MID <--> ABLETON
    end

    %% 상단 4개 트랙에서 중앙 코어로 수렴하는 선
    VISUAL --> TD
    AUDIO --> ABLETON
    INTERACTIVE --> TD
    INTERACTIVE --> ABLETON
    WEB --> CORE

    %% =========================================================
    %% [3층 - 최하단] OUTPUTS
    %% =========================================================

    subgraph OUTPUT[" OUTPUTS "]
        direction LR
        MEDIA["MEDIA"]
        INTERACTIVE_OUT["INTERACTIVE"]
        INSTALLATION["INSTALLATION"]
        LIVE["LIVE"]

        MEDIA ~~~ INTERACTIVE_OUT ~~~ INSTALLATION ~~~ LIVE
    end

    CORE --> OUTPUT

    %% =========================================================
    %% STYLES & TRICK 3 (노드 크기 및 가로 폭 강제 확대)
    %% =========================================================

    style V_M fill:none,stroke:none
    style A_M fill:none,stroke:none

    style V_TRACK fill:#111419,stroke:#2d333b,color:#a0a8b3
    style A_TRACK fill:#14130f,stroke:#3b3323,color:#b8a379
    style I_TRACK fill:#111419,stroke:#2d333b,color:#a0a8b3
    style W_TRACK fill:#111419,stroke:#2d333b,color:#a0a8b3

    style CORE fill:#0b1619,stroke:#55c3d2,stroke-width:2px,color:#eefbfc
    style OUTPUT fill:#14171a,stroke:#aeb5bd,stroke-width:2px,color:#f1f3f5

    classDef domain fill:#111419,stroke:#737b84,color:#f0f2f4,stroke-width:2px,font-size:13px;
    classDef visualTool fill:#17191d,stroke:#69747e,color:#e6eaed,stroke-width:2px,font-size:11px;
    classDef visualMethod fill:#17191d,stroke:#69747e,color:#e6eaed,stroke-width:2px,font-size:11px;
    classDef audioTool fill:#191813,stroke:#9c8245,color:#fff7df,stroke-width:2px,font-size:11px;
    classDef audioMethod fill:#191813,stroke:#9c8245,color:#fff7df,stroke-width:2px,font-size:11px;
    classDef webTool fill:#15181d,stroke:#69747e,color:#e6eaed,stroke-width:2px,font-size:11px;

    %% 🔥 [트릭 3] 하단 코어 및 아웃풋 노드의 min-width/padding을 키워 역피라미드 바닥을 묵직하게 받침
    classDef coreTD fill:#102226,stroke:#55c3d2,color:#ffffff,stroke-width:3px,font-size:15px,min-width:160px,padding:12px;
    classDef coreAudio fill:#262215,stroke:#c19a45,color:#ffffff,stroke-width:3px,font-size:15px,min-width:160px,padding:12px;
    classDef communication fill:#1b1824,stroke:#9b7bd3,color:#eee8ff,stroke-width:2px,font-size:11px,min-width:100px;
    classDef output fill:#20242b,stroke:#aeb5bd,color:#ffffff,stroke-width:3px,font-size:14px,min-width:130px,padding:10px;

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
