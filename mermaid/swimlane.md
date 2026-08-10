```mermaid

swimlane-beta TB
  subgraph lane1 ["01. Code & Creative"]
    JS[JavaScript]
    P5[p5.js]
    STRUDEL[Strudel]
    MAX[Max / MSP]
    RNBO[RNBO]
    PY[Python]

    JS --> P5
    JS --> STRUDEL
    MAX --> RNBO
  end

  subgraph lane2 ["02. Visual & AI"]
    CAVALRY[Cavalry]
    BLENDER[Blender]
    AI_MODELS[GenAI]
    COMFY[ComfyUI]

    AI_MODELS --> COMFY
    BLENDER --> COMFY
  end

  subgraph lane3 ["03. Hub & Routing"]
    TD[TouchDesigner]
    ABLETON[Ableton Live]
    WEB_NULL[Web Buffer]
    MEDIA_NULL[AE Buffer]
  end

  subgraph lane4 ["04. Outputs"]
    WEB_OUT[Interactive Web]
    LIVE_OUT[Audio Visual]
    INSTALL_OUT[Installation]
    MEDIA_OUT[Final Media]
  end

  PY --> TD
  MAX --> TD
  STRUDEL --> ABLETON
  STRUDEL --> WEB_NULL

  BLENDER --> TD
  CAVALRY --> TD
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
