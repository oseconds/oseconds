# Creative Pipeline Graph

## Concept

단순한 Stack 목록이 아니라, 작업 과정에서 사용되는 도구와 데이터 흐름을 보여주는 패치 형태의 시각화.

Max/MSP 패치와 TouchDesigner 네트워크 구조에서 영감을 받아 각 도구를 노드(Node)로 표현하고 신호 흐름(Signal Flow)을 연결한다.

목표:

- 어떤 툴을 사용하는지 보여주는 것이 아니라
- 아이디어가 어떻게 결과물로 변환되는지 보여준다.
- Audio / Visual / AI / Hardware / Live 시스템이 어떻게 연결되는지 표현한다.


---

# Core Structure

INPUT

IDEA / TEXT / CONCEPT

        |
        +----------------------------+
        |                            |
        v                            v

IMAGE GENERATION              AUDIO GENERATION

FLUX                          Ableton
Stable Diffusion              Strudel
ComfyUI                       Max


        |
        v

IMAGE / STYLE

        |
        +----------------------------+
        |                            |
        v                            v

VIDEO GENERATION              REALTIME VISUAL

Kling                         TouchDesigner
Seedance                      p5.js
MiniMax H3                    GLSL


        |
        v

VIDEO / VISUAL OUTPUT

        |
        +----------------------------+
        |                            |
        v                            v

MEDIA                         LIVE PERFORMANCE

After Effects                 Resolume
Topaz                         Ableton
Photoshop                     MIDI / OSC


        |
        v

OUTPUT

Installation
Projection
Performance
Video


---

# Signal Flow Example

[Ableton]

    |
    |
 outlet ●────────● inlet

              [Max]

    |
    |
   OSC

    |
    v

[TouchDesigner]

    |
    +--------------+
    |              |
    v              v

Projection      Resolume


---

# Node Design

각 툴은 하나의 노드로 표현.

Node 구성:

- Icon
- Name
- Input Port
- Output Port
- Category Color


예:

+----------------+
|                |
|   Ableton      |
|                |
| ●          ●   |
+----------------+


Input Port / Output Port


---

# Port System

Max/MSP 방식에서 영감.

각 노드는 연결 가능한 Port를 가진다.


Audio:

[Ableton]

audio out ●────────● audio in

[Max]


Visual:

[TouchDesigner]

TOP out ●────────● input


Control:

[Max]

OSC out ●────────● OSC in

[TouchDesigner]


---

# Connection Types

## Audio Signal

예:

Ableton → Max


## Visual Data

예:

AI → TouchDesigner


## Control Signal

예:

Max → OSC → TouchDesigner


## Hardware

예:

Arduino → Installation


---

# Example Workflows


## AI Video Workflow

TEXT

↓

FLUX / Stable Diffusion

↓

ComfyUI

↓

Kling / Seedance / MiniMax H3

↓

TouchDesigner

↓

Projection / Video


---

## Audio Reactive Workflow

Ableton

↓

Max

↓

OSC

↓

TouchDesigner

↓

Visual Output


---

## Live Performance Workflow

Ableton

↓

MIDI / OSC

↓

TouchDesigner

↓

Resolume / Projection


---

# Implementation

## SVG Structure

하나의 큰 SVG 파일:

creative-pipeline.svg


구성:

- Background
- Nodes
- Icons
- Ports
- Connections


구조:

svg

    Background

    Nodes

        icon
        label
        input port
        output port

    Connections

        path


---

# Future Features

## Hover

SVG title을 활용해 정보 표시.

예:

Ableton

Audio production environment


---

## Animation

가능한 방향:

- Signal 흐름 점선 애니메이션
- 데이터 이동 표현
- 활성화된 노드 강조


---

## Interactive Version

Web 버전 확장 가능.

기술:

- Svelte
- SVG
- D3.js


기능:

- 노드 이동
- 연결 추가
- 워크플로우 저장
- 패치 에디터 형태


---

# Relationship With Signal Rack

Creative Pipeline Graph는 Signal Rack 철학과 연결된다.

Automation → Signal → Mapping → Output

툴 목록이 아니라,
창작 과정에서 데이터와 신호가 어떻게 이동하는지를 보여주는 시스템.
