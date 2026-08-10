```mermaid
swimlane-beta LR
    title AV System Workflow Swimlanes

    "01. Code & Creative" {
        JS[JavaScript] --> P5[p5.js]
        JS --> STRUDEL[Strudel]
        MAX[Max / MSP] --> RNBO[RNBO]
        PY[Python]
    }

    "02. Visual & AI" {
        AI_MODELS[GenAI] --> COMFY[ComfyUI]
        BLENDER[Blender] --> COMFY
        BLENDER --> TD
    }

    "03. Hub & Routing" {
        TD[TouchDesigner]
        ABLETON[Ableton Live]
        WEB_NULL[Web Buffer]
        MEDIA_NULL[AE Buffer]
    }

    "04. Outputs" {
        WEB_OUT[Interactive Web]
        LIVE_OUT[Audio Visual]
        INSTALL_OUT[Installation]
        MEDIA_OUT[Final Media]
    }

    PY --> TD
    MAX --> TD
    STRUDEL --> ABLETON
    STRUDEL --> WEB_NULL

    BLENDER --> TD
    CAVALRY[Cavalry] --> TD
    CAVALRY --> MEDIA_NULL

    P5 --> WEB_NULL
    RNBO --> WEB_NULL
    COMFY --> MEDIA_NULL
    COMFY --> TD

    WEB_NULL --> WEB_OUT
    MEDIA_NULL --> MEDIA_OUT
    TD --> LIVE_OUT
    TD --> INSTALL_OUT
    ABLETON --> LIVE_OUT
