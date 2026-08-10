```mermaid

flowchart LR
    %% Subgraphs for clean layout without wasted space
    subgraph Control_Layer [라이브 & 타임라인 제어]
        direction TB
        MIDI([MIDI Controller])
        Ableton[Ableton Live]
        MIDI -.-> |MIDI 제어| Ableton
    end

    subgraph Hub_Layer [메인 허브]
        TD{{"TouchDesigner"}}
    end

    subgraph Output_Layer [통합 출력]
        Visuals(["Visuals (통합 에셋)"])
    end

    %% Main flow
    Ableton == "TDAbleton / OSC / MIDI\n(파라미터 동기화 및 관리)" ==> TD
    TD == "데이터 기반 실시간 렌더링" ==> Visuals

    %% Styling
    classDef hub fill:#ff7e67,stroke:#333,stroke-width:4px,color:#fff,font-size:18px,font-weight:bold;
    classDef control fill:#4a90e2,stroke:#333,stroke-width:2px,color:#fff;
    classDef output fill:#50c878,stroke:#333,stroke-width:2px,color:#fff;
    classDef sub bg:#f4f4f4,stroke:#ccc,stroke-width:2px,stroke-dasharray: 5 5;

    class TD hub;
    class Ableton,MIDI control;
    class Visuals output;
    class Control_Layer,Hub_Layer,Output_Layer sub;
