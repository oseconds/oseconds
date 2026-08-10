<p align="center">
  <strong>0seconds</strong><br>
  Artist & Developer exploring the intersection of<br>
  <strong>Audio · Visuals · AI · Interactive Systems</strong>
</p>

<p align="center">
  <sub>
    Ableton Certified Training · DALL-E 2 · Midjourney · Runway Gen-1/2 Beta Tester<br>
    Ableton Live 12 Public Beta · Extensions SDK Developer Program
  </sub>
</p>

<br>

<p align="center">
  <img src="./metrics-languages-indepth.svg">
</p>

---

## Work

```mermaid
mindmap
  root((0seconds))
    Audio
      Ableton
      Max/MSP
      TidalCycles
      Strudel
    Visual
      TouchDesigner
      Blender
      p5.js
      GLSL
    GenAI
      ComfyUI
      FLUX
      Stable Diffusion
      Deforum
      Seedance
      Kling
      MiniMax H3
    Media
      After Effects
      Photoshop
      Topaz
    Code
      JavaScript
      TypeScript
      Python
    Interactive
      OSC
      Arduino
      Firmata
      MIDI
    Live
      Resolume
      rekordbox
```

---

## Systems

```mermaid
flowchart LR
    AUDIO[Audio]
    VISUAL[Visual]
    AI[GenAI]
    CODE[Code]
    INPUT[Interaction]
    LIVE[Live]

    AUDIO --> SYSTEM[Interactive Systems]
    VISUAL --> SYSTEM
    AI --> SYSTEM
    CODE --> SYSTEM
    INPUT --> SYSTEM

    SYSTEM --> LIVE
```

---

## Audio

<div>
  <img src="./custom-icon/ableton.svg" height="48" title="Ableton"/>
  <img src="./custom-icon/max.svg" height="48" title="Max/MSP"/>
  <img src="./custom-icon/tidalcycles.svg" height="48" title="TidalCycles"/>
  <img src="./custom-icon/strudel.svg" height="48" title="Strudel"/>
</div>

Audio is treated as both a medium and a control signal.

```mermaid
flowchart LR
    ABLETON[Ableton Live]
    MAX[Max/MSP]
    TIDAL[TidalCycles]
    STRUDEL[Strudel]

    ABLETON --> MAX
    TIDAL --> AUDIO[Audio]
    STRUDEL --> AUDIO
    MAX --> AUDIO

    AUDIO --> VISUAL[Visual Systems]
    AUDIO --> INTERACTION[Interactive Systems]
```

---

## Visual

<div>
  <img src="./custom-icon/touchdesigner.svg" height="48" title="TouchDesigner"/>
  <img src="./custom-icon/blender.svg" height="48" title="Blender"/>
  <img src="./custom-icon/p5js.svg" height="48" title="p5.js"/>
  <img src="./custom-icon/glsl.svg" height="48" title="GLSL"/>
</div>

```mermaid
flowchart LR
    TD[TouchDesigner]
    BLENDER[Blender]
    P5[p5.js]
    GLSL[GLSL]

    TD --> REALTIME[Realtime Visuals]
    P5 --> WEB[Web Visuals]
    GLSL --> WEB
    BLENDER --> RENDER[3D / Render]

    REALTIME --> SYSTEM[Interactive Systems]
    WEB --> SYSTEM
    RENDER --> SYSTEM
```

---

## GenAI

<div>
  <img src="./custom-icon/comfyui.svg" height="48" title="ComfyUI"/>
  <img src="./custom-icon/deforum.svg" height="48" title="Deforum"/>
  <img src="./custom-icon/flux.svg" height="48" title="FLUX"/>
  <img src="./custom-icon/stable-diffusion.svg" height="48" title="Stable Diffusion"/>
  <br>
  <img src="./custom-icon/seedance.svg" height="48" title="Seedance"/>
  <img src="./custom-icon/kling.svg" height="48" title="Kling"/>
  <img src="./custom-icon/minimaxH3.svg" height="48" title="MiniMax H3"/>
</div>

```mermaid
flowchart LR
    IMAGE[Image Generation]
    VIDEO[Video Generation]
    WORKFLOW[ComfyUI / Workflows]

    FLUX[FLUX]
    SD[Stable Diffusion]
    SEEDANCE[Seedance]
    KLING[Kling]
    H3[MiniMax H3]

    FLUX --> IMAGE
    SD --> IMAGE

    SEEDANCE --> VIDEO
    KLING --> VIDEO
    H3 --> VIDEO

    IMAGE --> WORKFLOW
    VIDEO --> WORKFLOW
```

---

## Media

<div>
  <img src="./custom-icon/aftereffect.svg" height="48" title="After Effects"/>
  <img src="./custom-icon/photoshop.svg" height="48" title="Photoshop"/>
  <img src="./custom-icon/topaz.svg" height="48" title="Topaz"/>
</div>

```mermaid
flowchart LR
    AI[AI Generated Media]
    AE[After Effects]
    PS[Photoshop]
    TOPAZ[Topaz]

    AI --> AE
    AI --> PS
    AI --> TOPAZ

    AE --> OUTPUT[Final Media]
    PS --> OUTPUT
    TOPAZ --> OUTPUT
```

---

## Code

<div>
  <img src="./custom-icon/javascript.svg" height="48" title="JavaScript"/>
  <img src="./custom-icon/typescript.svg" height="48" title="TypeScript"/>
  <img src="./custom-icon/python.svg" height="48" title="Python"/>
</div>

```mermaid
flowchart LR
    JS[JavaScript]
    TS[TypeScript]
    PY[Python]

    JS --> WEB[Web]
    TS --> WEB
    PY --> AI[AI / Tools]

    WEB --> INTERACTIVE[Interactive Media]
    AI --> INTERACTIVE
```

---

## Interactive

<div>
  <img src="./custom-icon/osc.svg" height="48" title="OSC"/>
  <img src="./custom-icon/arduino.svg" height="48" title="Arduino"/>
  <img src="./custom-icon/firmata.svg" height="48" title="Firmata"/>
  <img src="./custom-icon/midi.svg" height="48" title="MIDI"/>
</div>

```mermaid
sequenceDiagram
    participant User
    participant Input
    participant System
    participant Audio
    participant Visual

    User->>Input: Interaction
    Input->>System: Control Signal
    System->>Audio: Update
    System->>Visual: Update
    Audio-->>User: Response
    Visual-->>User: Response
```

---

## Live

<div>
  <img src="./custom-icon/resolume.svg" height="48" title="Resolume"/>
  <img src="./custom-icon/rekordbox.svg" height="48" title="rekordbox"/>
</div>

```mermaid
flowchart LR
    AUDIO[Audio]
    VISUAL[Visual]
    LIVE[Live Environment]

    AUDIO --> LIVE
    VISUAL --> LIVE

    LIVE --> RESOLUME[Resolume]
    LIVE --> REKORDBOX[rekordbox]
```

---

## Projects

```mermaid
timeline
    title Selected Practice

    section Audio
      Ableton : Max/MSP
             : TidalCycles
             : Strudel

    section Visual
      TouchDesigner : Blender
                   : p5.js
                   : GLSL

    section AI
      ComfyUI : FLUX
              : Video Generation

    section Interactive
      Void-a : Installation
             : Gaze / Interaction
             : Web Archive

    section Systems
      Signal Rack : Control Signals
                  : Ableton
                  : Interactive Media
```

---

## Current Direction

```mermaid
flowchart LR
    AUDIO[Audio]
    VISUAL[Visual]
    AI[AI]
    WEB[Web]
    INTERACTION[Interaction]

    AUDIO --> EXPERIENCE[Creative Experience]
    VISUAL --> EXPERIENCE
    AI --> EXPERIENCE
    WEB --> EXPERIENCE
    INTERACTION --> EXPERIENCE
```

**Audio → Visual → AI → Code → Interaction**

The tools are different, but the direction is the same:

**building systems where sound, image, computation, and interaction become one medium.**

---

<p align="center">
  <sub>
    0seconds · Artist / Developer
  </sub>
</p>
