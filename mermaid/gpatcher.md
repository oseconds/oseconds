```mermaid

---
config:
  theme: dark
  flowchart:
    nodeSpacing: 8
    rankSpacing: 22
    curve: linear
---
flowchart TD

    %% =========================================================
    %% [LEVEL 1] INPUT TOOLS & SOURCES
    %% =========================================================
    subgraph L1[" LEVEL 1 : INPUT TOOLS "]
        direction LR
        V_GENAI["GenAI"]
        V_CAVALRY["Cavalry"]
        V_AE["After Effects"]
        V_BLENDER["Blender"]

        A_MAX["Max / MSP"]
        A_BITWIG["Bitwig"]

        I_HW["Hardware"]
        I_SENSORS["Sensors"]
        I_TRACKING["Tracking"]

        W_SVELTE["Svelte / Vite"]
        W_P5["p5.js / WebAudio"]
    end

    %% =========================================================
    %% [LEVEL 2] PROCESSING & DOMAINS
    %% =========================================================
    subgraph L2[" LEVEL 2 : PROCESSING & METHODS "]
        direction LR
        V_PROC["Visual Processing<br/>(Generative / 2D / 3D)"]
        A_PROC["Audio Processing<br/>(Synthesis / DSP)"]
        I_PROC["Interactive Bus<br/>(Control State)"]
        W_PROC["JavaScript Engine<br/>(Application State)"]
    end

    %% =========================================================
    %% [LEVEL 3] CORE ENGINES & MATRIX
    %% =========================================================
    subgraph L3[" LEVEL 3 : CORE SYSTEM HUB "]
        direction LR
        CORE_TD["TouchDesigner<br/>(Visual Engine)"]
        CORE_SYNC["OSC / MIDI Bridge<br/>(Bidirectional Sync)"]
        CORE_ABLETON["Ableton Live<br/>(Audio Engine)"]
    end

    %% =========================================================
    %% [LEVEL 4] SIGNAL ROUTING
    %% =========================================================
    CORE_SIGNAL["[matrix~] COMBINED REALTIME SIGNAL HUB"]

    %% =========================================================
    %% [LEVEL 5] OUTPUTS
    %% =========================================================
    subgraph L5[" LEVEL 5 : TARGET OUTPUTS "]
        direction LR
        OUT_MEDIA["Media Output<br/>(Video / Render)"]
        OUT_LIVE["Live Performance<br/>(AV Show)"]
        OUT_INSTALL["Physical Installation<br/>(Interactive Space)"]
        OUT_WEB["Interactive Web<br/>(Browser App)"]
    end

    %% =========================================================
    %% WORKFLOW FLOW CONNECTIONS (색상별 흐름 추적)
    %% =========================================================

    %% 🟣 1. VISUAL WORKFLOW
    V_GENAI & V_CAVALRY & V_AE & V_BLENDER ==> V_PROC
    V_PROC ==> CORE_TD
    CORE_TD ==> CORE_SIGNAL
    CORE_SIGNAL ==> OUT_MEDIA & OUT_LIVE

    %% 🟡 2. AUDIO WORKFLOW
    A_MAX & A_BITWIG ==> A_PROC
    A_PROC ==> CORE_ABLETON
    CORE_ABLETON ==> CORE_SIGNAL
    CORE_SIGNAL ==> OUT_LIVE & OUT_MEDIA

    %% 🩵 3. INTERACTIVE WORKFLOW
    I_HW & I_SENSORS & I_TRACKING ==> I_PROC
    I_PROC ==> CORE_TD & CORE_ABLETON
    CORE_SIGNAL ==> OUT_INSTALL

    %% 🟢 4. WEB WORKFLOW
    W_SVELTE & W_P5 ==> W_PROC
    W_PROC ==> CORE_TD & CORE_ABLETON
    W_PROC ==> CORE_SIGNAL
    CORE_SIGNAL ==> OUT_WEB

    %% ⚡ CORE INTERACTION LOOP
    CORE_TD <==> CORE_SYNC <==> CORE_ABLETON

    %% =========================================================
    %% STYLING (워크플로우별 트랙 색상 지정)
    %% =========================================================
    classDef visStyle fill:#2e1065,stroke:#a855f7,color:#f3e8ff,stroke-width:2px;
    classDef audStyle fill:#451a03,stroke:#f59e0b,color:#fef3c7,stroke-width:2px;
    classDef itxStyle fill:#042f2e,stroke:#14b8a6,color:#ccfbf1,stroke-width:2px;
    classDef webStyle fill:#064e3b,stroke:#10b981,color:#d1fae5,stroke-width:2px;
    classDef coreStyle fill:#0f172a,stroke:#38bdf8,color:#f8fafc,stroke-width:3px;
    classDef signalStyle fill:#1e1b4b,stroke:#818cf8,color:#ffffff,stroke-width:3px;

    %% Class Assignment
    class V_GENAI,V_CAVALRY,V_AE,V_BLENDER,V_PROC,OUT_MEDIA visStyle;
    class A_MAX,A_BITWIG,A_PROC,OUT_LIVE audStyle;
    class I_HW,I_SENSORS,I_TRACKING,I_PROC,OUT_INSTALL itxStyle;
    class W_SVELTE,W_P5,W_PROC,OUT_WEB webStyle;
    class CORE_TD,CORE_SYNC,CORE_ABLETON coreStyle;
    class CORE_SIGNAL signalStyle;

    %% Subgraph Styling
    style L1 fill:#0d0f12,stroke:#262a30,color:#8e96a0
    style L2 fill:#0d0f12,stroke:#262a30,color:#8e96a0
    style L3 fill:#0a131a,stroke:#1e3a5f,color:#38bdf8
    style L5 fill:#0d0f12,stroke:#262a30,color:#8e96a0
