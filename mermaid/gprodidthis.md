```mermaid

flowchart TB
    %% ==========================================
    %% 레이어 1 : 최상단 (소스 및 에셋)
    %% ==========================================
    subgraph TOP_LAYER [TOP LAYER : Source & Logic]
        direction LR
        subgraph S1 [01. CODE & LIVE SCRIPTING]
            direction TB
            PY[Python]
            JSTS[JavaScript / TypeScript]
            STRUDEL[Strudel]
            TIDAL[TidalCycles]
            
            JSTS -.-> STRUDEL
        end
        
        subgraph S2 [02. VISUAL & AI ASSETS]
            direction TB
            CAVALRY[Cavalry]
            BLENDER[Blender]
            AI[GenAI: FLUX / SD / Kling]
            COMFY[ComfyUI]
            
            BLENDER -.->|Depth / Camera| AI
            AI -.-> COMFY
        end
    end

    %% ==========================================
    %% 레이어 2 : 중단 (제어부 및 메인 허브 - 나란히 배치)
    %% ==========================================
    subgraph MID_LAYER [MIDDLE LAYER : Control & Hub]
        direction LR
        subgraph S3 [03. TIMELINE & AUDIO]
            direction TB
            BITWIG[Bitwig]
            ABLETON[Ableton Live]
            MAX[Max / MSP]
            
            ABLETON -.-> MAX
        end
        
        subgraph S4 [04. MAIN CORE HUB]
            direction TB
            TD{{TouchDesigner}}
            P5[p5.js / GLSL]
        end
    end

    %% ==========================================
    %% 레이어 3 : 하단 (최종 아웃풋 - 가장 아래에 깔림)
    %% ==========================================
    subgraph BOT_LAYER [BOTTOM LAYER : Creative Outputs]
        direction LR
        POST[Post Production]
        MEDIA_OUT[Final Media]
        LIVE[Live: TD / Ableton / Resolume]
        INSTALL[Physical Installation]
        WEB[Web & Archive]
        
        POST -.-> MEDIA_OUT
    end

    %% ==========================================
    %% 뼈대 강제 고정 (투명 링크로 위아래 레이아웃 잠금)
    %% ==========================================
    TOP_LAYER ~~~ MID_LAYER
    MID_LAYER ~~~ BOT_LAYER

    %% ==========================================
    %% 데이터 흐름 (라우팅)
    %% ==========================================
    
    %% Top -> Middle 연결
    STRUDEL -->|MIDI| ABLETON
    TIDAL -->|OSC| ABLETON
    JSTS --> MAX
    PY --> TD
    JSTS --> P5
    CAVALRY --> TD
    COMFY --> TD

    %% Middle 수평 핵심 연동 (에이블톤 -> 터치디자이너)
    ABLETON == TDAbleton / OSC / MIDI ==> TD
    BITWIG --> TD
    MAX --> TD

    %% Top -> Bottom 다이렉트 렌더링
    BLENDER --> POST
    COMFY --> POST

    %% Middle -> Bottom 최종 출력
    TD ==> LIVE
    TD ==> INSTALL
    ABLETON --> LIVE
    P5 --> WEB

    %% ==========================================
    %% 디자인 스타일링 (시각적 구분)
    %% ==========================================
    classDef layer fill:transparent,stroke:#999,stroke-width:2px,stroke-dasharray: 5 5;
    class TOP_LAYER,MID_LAYER,BOT_LAYER layer;
    
    classDef hub fill:#ff7e67,color:#fff,stroke:#333,stroke-width:4px,font-weight:bold,font-size:16px;
    class TD hub;
    
    classDef ctrl fill:#4a90e2,color:#fff,stroke:#333,stroke-width:2px;
    class ABLETON,BITWIG,MAX ctrl;
    
    classDef out fill:#50c878,color:#fff,stroke:#333,stroke-width:2px;
    class LIVE,INSTALL,WEB,MEDIA_OUT out;
