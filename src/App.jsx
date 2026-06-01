import React, { useState } from "react";

const G = "#C7BDD9",
  DK = "#1D1C22",
  CD = "#25242A",
  DB = "#34303E",
  TP = "#EFECF5",
  TS = "#9999B5",
  RD = "#D691A3",
  OR = "#D8B087",
  YL = "#E2D1B2",
  GR = "#87C3A9",
  BL = "#96B7FF",
  IN = "#98A5E3",
  PU = "#B8A3D4"

  const NAV = [
  { id: "overview", label: "Overview" },
  { id: "executive", label: "Executive Summary" },
  { id: "charter", label: "Project Charter" },
  { id: "scope", label: "Scope" },
  { id: "smart", label: "SMART Goals" },
  { id: "success", label: "Success Criteria" },
  { id: "hardware", label: "Hardware Specs" },
  { id: "stakeholders", label: "Stakeholders & RACI" },
  { id: "wbs", label: "WBS" },
  { id: "timeline", label: "Timeline & Milestones" },
  { id: "risks", label: "Risk, FMEA & RAID" },
  { id: "comms", label: "Communication Plan" },
  { id: "kpis", label: "KPIs & Flight Data" },
  { id: "tools", label: "Tools Used" },
  { id: "methodology", label: "Methodology" },
  { id: "architecture", label: "Systems Architecture" },
  { id: "tradeoffs", label: "Engineering Trade-offs" },
  { id: "conops", label: "CONOPS" },
  { id: "analysis", label: "SWOT & PESTLE" },
  { id: "governance", label: "Engineering Governance" },
  { id: "maturity", label: "Maturity Framing" },
  { id: "outcome", label: "Outcomes" }
]

function Tag({ children, c = G }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 9px",
        borderRadius: 4,
        fontSize: 10,
        fontFamily: "'JetBrains Mono',monospace",
        fontWeight: 500,
        border: `1px solid ${c}55`,
        color: c,
        background: `${c}15`,
        marginRight: 5,
        marginBottom: 3
      }}
    >
      {children}
    </span>
  )
}
function Sec({ id, title, sub }) {
  return (
    <div id={id} style={{ marginBottom: 20, paddingTop: 6 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 3
        }}
      >
        <div
          style={{
            width: 3,
            height: 26,
            background: `linear-gradient(180deg,${G},${G}33)`,
            borderRadius: 2
          }}
        />
        <h2
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 19,
            fontWeight: 700,
            color: TP,
            margin: 0
          }}
        >
          {title}
        </h2>
      </div>
      {sub && (
        <p style={{ color: TS, fontSize: 10, margin: "2px 0 0 13px" }}>{sub}</p>
      )}
    </div>
  )
}
function Card({ children, style = {} }) {
  return (
    <div
      style={{
        background: CD,
        border: `1px solid ${DB}`,
        borderRadius: 9,
        padding: "14px 18px",
        marginBottom: 10,
        ...style
      }}
    >
      {children}
    </div>
  )
}
function Bdg({ level, children }) {
  const m = {
    high: RD,
    medium: OR,
    low: YL,
    info: BL,
    done: GR,
    progress: G,
    backlog: TS,
    deferred: PU,
    purple: IN,
    white: TP
  }
  const c = m[level?.toLowerCase()] || BL
  return (
    <span
      style={{
        display: "inline-block",
        padding: "1px 6px",
        borderRadius: 20,
        fontSize: 9,
        fontWeight: 700,
        fontFamily: "'JetBrains Mono',monospace",
        color: c,
        background: `${c}20`,
        border: `1px solid ${c}40`
      }}
    >
      {children}
    </span>
  )
}
function Tbl({ headers, rows }) {
  return (
    <div
      style={{ overflowX: "auto", borderRadius: 7, border: `1px solid ${DB}` }}
    >
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: 10 }}
      >
        <thead>
          <tr style={{ background: `${G}10`, borderBottom: `1px solid ${DB}` }}>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  padding: "7px 11px",
                  textAlign: "left",
                  color: G,
                  fontFamily: "'DM Sans',sans-serif",
                  fontWeight: 700,
                  fontSize: 9,
                  letterSpacing: "0.4px",
                  whiteSpace: "nowrap"
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{
                borderBottom: i < rows.length - 1 ? `1px solid ${DB}` : "none",
                background: i % 2 === 0 ? "transparent" : `${TP}02`
              }}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    padding: "7px 11px",
                    color: j === 0 ? TP : TS,
                    fontFamily: "'DM Sans',sans-serif",
                    verticalAlign: "top",
                    lineHeight: 1.5
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
function Gantt({ start, duration, total, color, label }) {
  const l = (start / total) * 100,
    w = (duration / total) * 100
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}
    >
      <div
        style={{
          width: 150,
          fontSize: 9,
          color: TS,
          flexShrink: 0,
          textAlign: "right",
          paddingRight: 6
        }}
      >
        {label}
      </div>
      <div
        style={{
          flex: 1,
          position: "relative",
          height: 16,
          background: `${DB}60`,
          borderRadius: 3
        }}
      >
        <div
          style={{
            position: "absolute",
            left: `${l}%`,
            width: `${w}%`,
            height: "100%",
            background: `linear-gradient(90deg,${color},${color}BB)`,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            paddingLeft: 5,
            boxSizing: "border-box"
          }}
        >
          <span
            style={{
              fontSize: 8,
              color: DK,
              fontWeight: 700,
              whiteSpace: "nowrap"
            }}
          >
            W{start + 1}–W{start + duration}
          </span>
        </div>
      </div>
    </div>
  )
}
function Lbl({ text, color }) {
  return (
    <div
      style={{
        fontSize: 9,
        color,
        fontWeight: 700,
        letterSpacing: "0.5px",
        marginBottom: 7
      }}
    >
      {text.toUpperCase()}
    </div>
  )
}
function Blt({ items, color, size = 10 }) {
  return items.map((item, i) => (
    <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4 }}>
      <span style={{ color, fontSize: size + 1, flexShrink: 0 }}>→</span>
      <span style={{ fontSize: size, color: TS, lineHeight: 1.5 }}>{item}</span>
    </div>
  ))
}

export default function App() {
  const [active, setActive] = useState("overview")
  const go = id => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
    setActive(id)
  }
  return (
    <div
      style={{
        fontFamily: "'DM Sans',sans-serif",
        background: DK,
        minHeight: "100vh",
        color: TP
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* HERO */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#25242A 0%,#232332 55%,#25242A 100%)",
          borderBottom: `1px solid ${DB}`,
          padding: "36px 36px 24px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage: `linear-gradient(${DB} 1px,transparent 1px),linear-gradient(90deg,${DB} 1px,transparent 1px)`,
            backgroundSize: "36px 36px"
          }}
        />
        <div style={{ position: "relative", maxWidth: 940, margin: "0 auto" }}>
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              flexWrap: "wrap",
              gap: 3
            }}
          >
            <Tag c={YL}>KACST · Future Economy Sector</Tag>
            <Tag c={RD}>UAV / Autonomous Systems</Tag>
            <Tag c={IN}>Proof of Concept</Tag>
            <Tag c={GR}>Solo Project</Tag>
            <Tag c={PU}>Vision 2030 Aligned</Tag>
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(20px,3.8vw,38px)",
              fontWeight: 900,
              color: TP,
              margin: "0 0 3px",
              lineHeight: 1.15
            }}
          >
            Autonomous Aerial Shade System
          </h1>
          <div
            style={{
              fontSize: "clamp(12px,2.2vw,17px)",
              color: G,
              fontWeight: 300,
              letterSpacing: "0.5px",
              marginBottom: 12
            }}
          >
            AASS · Project Case Study
          </div>
          <p
            style={{
              color: TS,
              fontSize: 11,
              maxWidth: 640,
              lineHeight: 1.75,
              margin: 0
            }}
          >
            A drone constellation designed to provide dynamic aerial shading for
            pilgrims during Hajj — reframing a recurring humanitarian safety
            problem as an autonomous mobility systems challenge. Built from
            concept to flight-tested prototype, independently, within a single
            summer training period at KACST.
          </p>
          <div
            style={{
              display: "flex",
              gap: 18,
              marginTop: 18,
              flexWrap: "wrap"
            }}
          >
            {[
              ["Payload Target", "5 kg"],
              ["Umbrella Load", "1.5 kg"],
              ["Frame + Electronics", "3.5 kg"],
              ["Flight Endurance", "~3.5 min"],
              ["Build Phases", "4"],
              ["Ministry Status", "✓ Demo Requested"]
            ].map(([l, v], i) => (
              <div
                key={i}
                style={{
                  borderLeft: `2px solid ${i === 5 ? GR : G}55`,
                  paddingLeft: 9
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: i === 5 ? GR : TP,
                    fontFamily: "'Playfair Display',serif"
                  }}
                >
                  {v}
                </div>
                <div style={{ fontSize: 9, color: TS, marginTop: 1 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          maxWidth: 1080,
          margin: "0 auto",
          width: "100%",
          padding: "0 10px"
        }}
      >
        {/* SIDEBAR */}
        <div
          style={{
            width: 172,
            flexShrink: 0,
            position: "sticky",
            top: 0,
            alignSelf: "flex-start",
            maxHeight: "100vh",
            overflowY: "auto",
            padding: "18px 0",
            display: "flex",
            flexDirection: "column",
            gap: 1
          }}
        >
          {NAV.map(s => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              style={{
                background: active === s.id ? `${G}15` : "transparent",
                border: "none",
                borderLeft: `2px solid ${active === s.id ? G : "transparent"}`,
                padding: "4px 10px",
                textAlign: "left",
                cursor: "pointer",
                color: active === s.id ? G : TS,
                fontSize: 9.5,
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: active === s.id ? 700 : 400,
                borderRadius: "0 4px 4px 0",
                transition: "all 0.13s",
                whiteSpace: "nowrap"
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* MAIN */}
        <div style={{ flex: 1, padding: "22px 0 40px 22px", minWidth: 0 }}>
          {/* OVERVIEW */}
          <Sec
            id="overview"
            title="Project Overview"
            sub="Classification, context & identity"
          />
          <Card>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14
              }}
            >
              {[
                ["Project Name", "Autonomous Aerial Shade System (AASS)", TS],
                [
                  "Project Type",
                  "Autonomous UAV / Humanitarian Mobility System",
                  RD
                ],
                [
                  "Sector",
                  "Smart Cities · Future Transportation · Robotics & AI",
                  OR
                ],
                [
                  "Organization",
                  "KACST – Future Economy Sector & Future Transportation Technologies Institute",
                  YL
                ],
                [
                  "Engagement",
                  "Solo-led engineering PoC — Summer Training at KACST",
                  GR
                ],
                [
                  "Methodology",
                  "Hybrid Waterfall + Agile Iterative Engineering",
                  BL
                ],
                [
                  "Current Status",
                  "Phase 1 PoC Complete · GNC Development Initiated",
                  IN
                ],
                [
                  "Ministry Engagement",
                  "Full prototype demonstration formally requested",
                  PU
                ]
              ].map(([l, v, c], i) => (
                <div
                  key={i}
                  style={{ borderLeft: `2px solid ${c}35`, paddingLeft: 9 }}
                >
                  <div
                    style={{
                      fontSize: 8,
                      color: c,
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      marginBottom: 2
                    }}
                  >
                    {l.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 11, color: TP, lineHeight: 1.45 }}>
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* EXECUTIVE SUMMARY */}
          <Sec id="executive" title="Executive Summary" />
          <Card>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 1fr",
                gap: 18
              }}
            >
              <div style={{ fontSize: 11, color: TS, lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 9px" }}>
                  <strong style={{ color: RD }}>Background:</strong> Every Hajj season, pilgrims sustain injuries from manual umbrellas in densely crowded environments - a recurring, preventable problem at scale. No scalable dynamic shading infrastructure existed capable of moving with crowd flow in real time.
                </p>
                <p style={{ margin: "0 0 9px" }}>
                  <strong style={{ color: OR }}>The Reframe:</strong> Instead of treating this as a static infrastructure problem, AASS reframed it as a dynamic autonomous mobility challenge: a coordinated constellation of UAVs autonomously hovering above pilgrim groups. Operating as a synchronized 'beehive', the system dynamically tracks pedestrian movement, transforming a humanitarian observation into a scalable autonomous architecture.
                </p>
                <p style={{ margin: "0 0 9px" }}>
                  <strong style={{ color: YL }}>The Execution:</strong> A proof-of-concept UAV was designed and built entirely from scratch — CAD, 3D printing, component selection, electrical integration, Pixhawk 4 Mini configuration, GPS-waypoint flight testing, and structural iteration — within a single summer training period at KACST, with zero prior drone experience and no direct support.
                </p>
                <p style={{ margin: 0 }}>
                  <strong style={{ color: GR }}>The Outcome:</strong> A fully
                  operational flight-tested platform demonstrating ~3.5-minute
                  endurance and a complete 6-stage flight sequence. The Saudi
                  Ministry of Hajj and Umrah formally requested a full prototype
                  demonstration. GNC algorithm development was initiated as a
                  direct continuation.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {[
                  [
                    "Problem",
                    "Recurring pilgrim injuries from manual umbrellas",
                    RD
                  ],
                  [
                    "Reframe",
                    "Static Shading → Autonomous Aerial Shade System",
                    OR
                  ],
                  [
                    "Execution",
                    "PoC UAV built independently concept to flight",
                    YL
                  ],
                  ["Outcome", "Ministry interest + GNC phase initiated", GR]
                ].map(([l, v, c], i) => (
                  <div
                    key={i}
                    style={{
                      background: `${c}0C`,
                      border: `1px solid ${c}28`,
                      borderRadius: 7,
                      padding: "8px 10px"
                    }}
                  >
                    <div
                      style={{
                        fontSize: 8,
                        color: c,
                        fontWeight: 700,
                        marginBottom: 2
                      }}
                    >
                      {l.toUpperCase()}
                    </div>
                    <div style={{ fontSize: 10, color: TP, lineHeight: 1.35 }}>
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* CHARTER */}
          <Sec
            id="charter"
            title="Project Charter"
            sub="Formal authorization and foundational commitments"
          />
          <Card>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 13
              }}
            >
              {[
                ["Project Sponsor", "KACST – Future Economy Sector, Future Transportation Technologies Institute", RD],
                ["Project Lead", "Solo Engineer (Training Participant)", OR],
                [
                  "Primary Objective",
                  "Design and build a functional PoC UAV demonstrating aerial shade feasibility for pilgrims",
                  YL
                ],
                [
                  "Budget Envelope",
                  "Training-period resources — lab access, materials, 3D printing; no external procurement",
                  GR
                ],
                [
                  "Key Authority",
                  "KACST Supervisors sign off on design decisions; Specialist Doctors contribute shade system components",
                  BL
                ],
                [
                  "Core Constraints",
                  "Solo execution · Fixed 8-week timeline · Zero prior drone experience · No direct implementation support",
                  IN
                ]
              ].map(([l, v, c], i) => (
                <div
                  key={i}
                  style={{ borderLeft: `2px solid ${c}38`, paddingLeft: 9 }}
                >
                  <div
                    style={{
                      fontSize: 8,
                      color: c,
                      fontWeight: 700,
                      letterSpacing: "0.4px",
                      marginBottom: 2
                    }}
                  >
                    {l.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 10, color: TS, lineHeight: 1.45 }}>
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card style={{ borderColor: `${G}35`, background: `${G}05` }}>
            <Lbl text="Charter Statement" color={PU} />
            <p style={{ fontSize: 11, color: TS, lineHeight: 1.8, margin: 0 }}>
              This project is formally authorized to design, prototype, and validate a UAV-based aerial shading concept during the KACST summer training period. The project lead is empowered to make independent engineering decisions within defined scope. Two specialist doctors contribute canopy material design and deployment mechanism engineering respectively. The project concludes with a formal technical presentation and complete documentation package enabling downstream GNC development and a Ministry of Hajj prototype demonstration.
            </p>
          </Card>

          {/* SCOPE */}
          <Sec id="scope" title="Scope Statement" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              marginBottom: 10
            }}
          >
            <Card style={{ borderColor: `${GR}35` }}>
              <Lbl text="✓ In Scope" color={GR} />
              <Blt
                color={GR}
                items={[
                  "UAV conceptual design + CAD modelling",
                  "Structural frame development + 3D printing (FDM)",
                  "Electronics integration — motors, ESCs, FC, battery, GPS",
                  "Pixhawk 4 Mini programming (axes, motor directions, GPS, altitude modes)",
                  "Propulsion testing + thrust-to-weight ratio validation",
                  "Payload feasibility analysis (~5 kg system target)",
                  "Thermal control consideration for electrical systems",
                  "Collaborative shade system design with KACST doctors",
                  "Iterative structural redesign — landing gear + CF props + weight reduction",
                  "Technical presentation to KACST researchers and engineers",
                  "Full 4-phase engineering documentation + GNC handoff package"
                ]}
              />
            </Card>
            <Card style={{ borderColor: `${RD}35` }}>
              <Lbl text="✗ Out of Scope" color={RD} />
              <Blt
                color={RD}
                items={[
                  "Full autonomous swarm / constellation implementation",
                  "Production-grade manufacturing",
                  "AI crowd tracking software",
                  "Long-endurance deployment systems (beyond current ~3.5 min)",
                  "Regulatory certification — GACA / airspace clearance",
                  "Commercial deployment",
                  "GNC algorithm development (next phase — external team)",
                  "Full umbrella integration on flying platform",
                  "Live Hajj pilot testing",
                  "Multi-drone constellation formation testing",
                  "Procurement and supply chain process"
                ]}
              />
            </Card>
          </div>

          {/* SMART */}
          <Sec
            id="smart"
            title="SMART Goals"
            sub="Specific · Measurable · Achievable · Relevant · Time-bound"
          />
          {[
            {
              n: "01",
              goal:
                "Build a physically flying UAV prototype within the training duration",
              meas: "Stable hover test documented",
              achieve: "Lab, materials, and 3D printing access at KACST",
              rel:
                "Core physical deliverable validating AASS concept feasibility",
              time: "End of training period"
            },
            {
              n: "02",
              goal:
                "Achieve a thrust architecture exceeding 5 kg total system payload target",
              meas: "Bench thrust records + propulsion calculation log",
              achieve:
                "Motor and prop selection driven by propulsion mathematicMotor and prop selection driven by T/W mathematics",
              rel:
                "Validates payload feasibility for shade mechanism deployment",
              time: "Confirmed before final presentation"
            },
            {
              n: "03",
              goal:
                "Execute a complete 6-stage flight sequence: Takeoff → Waypoint → Hover → Transition → Hover → Landing",
              meas: "Full sequence documented — video + engineering log",
              achieve: "Pixhawk 4 Mini firmware supports waypoint sequencing",
              rel: "Demonstrates operational readiness beyond basic hover",
              time: "Phase 5 — Week 6"
            },
            {
              n: "04",
              goal:
                "Identify and resolve ≥2 critical structural flaws with documented corrective actions",
              meas:
                "Issues in engineering log with applied solutions verified by re-test",
              achieve:
                "Phase 6 (optimisation) explicitly allocated for iteration",
              rel:
                "Demonstrates real engineering judgment under operational constraints",
              time: "Before final presentation — Week 7"
            },
            {
              n: "05",
              goal:
                "Deliver a complete technical presentation to KACST supervisors and engineers",
              meas:
                "Presentation delivered; supervisor feedback received and documented",
              achieve:
                "Training program includes formal end-of-period presentation slot",
              rel:
                "Required for training completion and institutional project visibility",
              time: "Week 8 — final week of training"
            },
            {
              n: "06",
              goal:
                "Generate external institutional interest resulting in a prototype demonstration request",
              meas:
                "Official demonstration request received from the Ministry of Hajj",
              achieve:
                "KACST supervisors hold direct Ministry communication channels",
              rel: "Advances project beyond training into next funded phase",
              time: "Within training period"
            }
          ].map((g, i) => (
            <Card key={i} style={{ marginBottom: 7 }}>
              <div
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 22,
                    color: `${TP}D9`,
                    fontWeight: 900,
                    flexShrink: 0,
                    lineHeight: 1,
                    marginTop: 1
                  }}
                >
                  {g.n}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: TP,
                      fontWeight: 600,
                      marginBottom: 7
                    }}
                  >
                    {g.goal}
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4,1fr)",
                      gap: 7
                    }}
                  >
                    {[
                      ["Measure", g.meas, RD],
                      ["Achievable", g.achieve, OR],
                      ["Relevant", g.rel, YL],
                      ["Time-bound", g.time, GR]
                    ].map(([a, v, c], j) => (
                      <div key={j}>
                        <div
                          style={{
                            fontSize: 8,
                            color: c,
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                            marginBottom: 2
                          }}
                        >
                          {a.toUpperCase()}
                        </div>
                        <div
                          style={{ fontSize: 9, color: TS, lineHeight: 1.4 }}
                        >
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* SUCCESS CRITERIA */}
          <Sec id="success" title="Success Criteria" sub="How project success is formally defined and validated"/>
          <Card style={{padding:0}}>
            <div style={{overflowX:"auto",borderRadius:9}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:10}}>
                <thead>
                  <tr style={{background:`${G}10`,borderBottom:`1px solid ${DB}`}}>
                    {["#","Criterion","Validation Method","Status"].map((h,i)=>(
                      <th key={i} style={{padding:"9px 14px",textAlign:"left",color:G,fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:9,letterSpacing:"0.4px",whiteSpace:"nowrap",width:i===0?"72px":i===3?"100px":"auto"}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {code:"SC-01",title:"UAV achieves stable powered flight",detail:"Full 6-stage flight sequence executed and documented (Takeoff → Waypoint → Hover → Transition → Hover → Landing)",validation:"Documented hover test video + engineering log",exceeded:false},
                    {code:"SC-02",title:"Frame survives operational testing without structural failure",detail:"Structure intact post full-flight sequence — no critical failures or fractures during testing",validation:"Post-test physical inspection",exceeded:false},
                    {code:"SC-03",title:"Flight controller configured correctly for all axes and modes",detail:"Pixhawk 4 Mini calibrated: axes, motor orientation, GPS integration, altitude and flight modes",validation:"FC calibration log + test results",exceeded:false},
                    {code:"SC-04",title:"Payload concept validated (5 kg thrust target)",detail:"5 kg architecture confirmed — propulsion budget supports 1.5 kg shade + 3.5 kg frame/electronics",validation:"Bench test + T/W ratio calculation comparison",exceeded:false},
                    {code:"SC-05",title:"All subsystems integrate successfully (power + control + structure)",detail:"Power, control, structure, and propulsion operate cohesively as a unified platform",validation:"Integration checklist; no conflicts in flight",exceeded:false},
                    {code:"SC-06",title:"Prototype presented professionally to supervisors",detail:"4-phase documentation delivered; formal presentation to KACST researchers and engineers completed",validation:"Presentation delivered + feedback documented",exceeded:false},
                    {code:"SC-07",title:"Ministry of Hajj formally requests full prototype demo",detail:"Saudi Ministry of Hajj and Umrah formally requests full system prototype demonstration",validation:"Official request received and documented",exceeded:true},
                  ].map((row,i,arr)=>(
                    <tr key={i} style={{borderBottom:i<arr.length-1?`1px solid ${DB}`:"none",background:i%2===0?"transparent":`${TP}02`}}>
                      <td style={{padding:"11px 14px",verticalAlign:"top"}}>
                        <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,fontWeight:700,color:TP}}>{row.code}</span>
                      </td>
                      <td style={{padding:"11px 14px",verticalAlign:"top"}}>
                        <div style={{fontSize:11,color:TP,fontWeight:400,marginBottom:3}}>{row.title}</div>
                        <div style={{fontSize:9,color:`${TS}80`,lineHeight:1.5}}>{row.detail}</div>
                      </td>
                      <td style={{padding:"11px 14px",verticalAlign:"top",color:TS,fontSize:10}}>{row.validation}</td>
                      <td style={{padding:"11px 14px",verticalAlign:"top"}}>
                        <span style={{
                          display:"inline-flex",alignItems:"center",gap:4,
                          padding:"3px 10px",borderRadius:20,
                          fontSize:10,fontWeight:700,
                          color:row.exceeded?BL:GR,
                          background:row.exceeded?`${BL}18`:`${GR}18`,
                          border:`1px solid ${row.exceeded?BL:GR}40`,
                          whiteSpace:"nowrap",
                        }}>{row.exceeded?"Exceeded ↑":"Met ✓"}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* HARDWARE SPECS */}
          <Sec
            id="hardware"
            title="Hardware Specifications"
            sub="Deployed component architecture — full bill of materials"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              marginBottom: 10
            }}
          >
            <Card style={{ borderTop: `3px solid ${RD}` }}>
              <Lbl text="Propulsion System" color={RD} />
              {[
                ["Motors", "Emax ECO 2207 1900KV (×4)"],
                ["ESCs", "Flameback 45A (×4)"],
                [
                  "Propellers",
                  "Carbon Fibre — final iteration (replaced nylon)"
                ],
                ["Configuration", "Quadrotor — symmetric 4-arm layout"]
              ].map(([l, v], i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px 0",
                    borderBottom: i < 3 ? `1px solid ${DB}` : "none"
                  }}
                >
                  <span style={{ fontSize: 10, color: TP, fontWeight: 500 }}>{l}</span>
                  <span
                    style={{
                      fontSize: 10,
                      color: TS,
                      fontWeight: 500,
                      fontFamily: "'JetBrains Mono',monospace",
                      textAlign: "right"
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </Card>
            <Card style={{ borderTop: `3px solid ${OR}` }}>
              <Lbl text="Control & Navigation System" color={OR} />
              {[
                ["Flight Controller", "Pixhawk 4 Mini"],
                ["GPS Module", "Pixhawk GPS Module"],
                ["RC Receiver", "Radiolink R9DS"],
                ["Firmware", "PX4 / ArduPilot (Pixhawk native)"]
              ].map(([l, v], i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px 0",
                    borderBottom: i < 3 ? `1px solid ${DB}` : "none"
                  }}
                >
                  <span style={{ fontSize: 10, color: TP, fontWeight: 500 }}>{l}</span>
                  <span
                    style={{
                      fontSize: 10,
                      color: TS,
                      fontWeight: 500,
                      fontFamily: "'JetBrains Mono',monospace",
                      textAlign: "right"
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </Card>
            <Card style={{ borderTop: `3px solid ${YL}` }}>
              <Lbl text="Power System" color={YL} />
              {[
                ["Battery", "Gens Ace 5000mAh 50C 14.8V LiPo"],
                ["Power Board", "PM06 V2 Power Management Board"],
                ["Cell Configuration", "4S — 14.8V nominal"],
                ["Discharge Rating", "50C high-discharge"]
              ].map(([l, v], i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px 0",
                    borderBottom: i < 3 ? `1px solid ${DB}` : "none"
                  }}
                >
                  <span style={{ fontSize: 10, color: TP, fontWeight: 500 }}>{l}</span>
                  <span
                    style={{
                      fontSize: 10,
                      color: TS,
                      fontWeight: 500,
                      fontFamily: "'JetBrains Mono',monospace",
                      textAlign: "right"
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </Card>
            <Card style={{ borderTop: `3px solid ${GR}` }}>
              <Lbl text="Payload Architecture" color={GR} />
              {[
                ["Total Payload Target", "~5.0 kg"],
                ["Canopy + Mechanism", "~1.5 kg "],
                ["Frame + Electronics", "~3.5 kg"],
                ["Canopy Material", "Lightweight permeable composite"],
                ["Deploy Mechanism", "Retractable umbrella — inspired by the prophet's mosque umprellas deployment mechanism"]
              ].map(([l, v], i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px 0",
                    borderBottom: i < 4 ? `1px solid ${DB}` : "none"
                  }}
                >
                  <span style={{ fontSize: 10, color: TP, fontWeight: 500 }}>{l}</span>
                  <span
                    style={{
                      fontSize: 10,
                      color: TS,
                      fontWeight: 500,
                      fontFamily: "'JetBrains Mono',monospace",
                      textAlign: "right"
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </Card>
          </div>
          <Card>
            <Lbl text="Structural Fabrication" color={BL} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10
              }}
            >
              {[
                [
                  "Frame",
                  "Custom 4-arm quadrotor airframe — single-piece FDM 3D print (initial iteration)"
                ],
                [
                  "Landing Gear",
                  "Custom-designed — added post flight-test to address lower-frame impact risk"
                ],
                [
                  "Print Method",
                  "FDM (Fused Deposition Modelling) — full CAD-to-print workflow"
                ],
                [
                  "Iterations",
                  "Nylon → CF props · Weight reduction audit · Landing gear addition"
                ]
              ].map(([l, v], i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: 8,
                      color: TP,
                      fontWeight: 700,
                      marginBottom: 2
                    }}
                  >
                    {l.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 10, color: TS, lineHeight: 1.4 }}>
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* STAKEHOLDERS + RACI */}
          <Sec
            id="stakeholders"
            title="Stakeholders & RACI Matrix"
            sub="Power / Interest mapping + responsibility assignment"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              marginBottom: 10
            }}
          >
            {[
              {
                name: "Ministry of Hajj & Umrah",
                role: "Potential Adopter / Institutional Sponsor",
                power: "High",
                interest: "High",
                quad: "Manage Closely",
                c: RD,
                strategy:
                  "Prepare compelling PoC demo. Respond promptly to all requests. Frame communication around operational safety impact at scale."
              },
              {
                name: "KACST Supervisors & Doctors",
                role:
                  "Technical Mentors · Institutional Champions · Shade System Co-Designers",
                power: "High",
                interest: "High",
                quad: "Manage Closely",
                c: OR,
                strategy:
                  "Weekly syncs. Involve in key design decisions. Leverage Dr. Majid, who is responsible for co-designing the deployment mechanism, and the other doctor, who is responsible for co-designing the canopy material."
              },
             {
                name: "Pilgrims & Outdoor Workers",
                role: "End Users / Beneficiaries",
                power: "Low",
                interest: "High",
                quad: "Keep Informed",
                c: YL,
                strategy:
                  "Represented through Ministry engagement. Safety and usability must be framed around their real-world experience."
              },
              {
                name: "GNC Algorithm Team",
                role: "Next-Phase Technical Continuation",
                power: "Medium",
                interest: "High",
                quad: "Keep Informed",
                c: GR,
                strategy:
                  "Deliver clean specs, Pixhawk flight data, and all documented issues for seamless phase handoff."
              },
             {
                name: "Project Engineer (Self)",
                role:
                  "Sole Technical Contributor — Design, Build, Test, Document, Present",
                power: "High",
                interest: "High",
                quad: "Key Player",
                c: PU,
                strategy:
                  "Self-manage via 4-phase WBS. Daily engineering log. Escalate blockers to supervisors immediately."
              },
              {
                name: "Training Cohort Peers",
                role: "Co-trainees at KACST Institute",
                power: "Low",
                interest: "Medium",
                quad: "Monitor",
                c: TS,
                strategy:
                  "Informal knowledge sharing during joint lectures. No formal coordination required."
              }
            ].map((st, i) => (
              <Card
                key={i}
                style={{ borderLeft: `3px solid ${st.c}`, marginBottom: 7 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 7
                  }}
                >
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: TP }}>
                      {st.name}
                    </div>
                    <div style={{ fontSize: 9, color: TS, marginTop: 1 }}>
                      {st.role}
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "2px 7px",
                      borderRadius: 4,
                      background: `${st.c}18`,
                      color: st.c,
                      fontSize: 8,
                      fontWeight: 700,
                      flexShrink: 0,
                      marginLeft: 7,
                      alignSelf: "flex-start"
                    }}
                  >
                    {st.quad}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, marginBottom: 7 }}>
                  <Tag c={st.power === "High" ? RD : st.power === "Medium" ? OR : TS}>
                    Power: {st.power}
                  </Tag>
                  <Tag c={st.interest === "High" ? RD : st.interest === "Medium" ? OR : YL}>
                    Interest: {st.interest}
                  </Tag>
                </div>
                <div style={{ fontSize: 10, color: TS, lineHeight: 1.55 }}>
                  <span style={{ color: G, fontWeight: 600 }}>Strategy: </span>
                  {st.strategy}
                </div>
              </Card>
            ))}
          </div>
          <Card style={{ padding: 0 }}>
                <Tbl
                  headers={[
                    "Activity",
                    "Engineer (Self)",
                    "KACST Supervisors",
                    "Dr. - Canopy Material Designer",
                    "Dr. Majid (Mechanism)",
                    "Ministry",
                    "GNC Team"
                  ]}
                  rows={[
                    [
                      "Conceptual Design & Framing",
                      <span><Bdg level="high">R</Bdg> <Bdg level="medium">A</Bdg></span>,
                      <Bdg level="low">C</Bdg>,
                      <Bdg level="backlog">I</Bdg>,
                      <Bdg level="backlog">I</Bdg>,
                      "—",
                      "—"
                    ],
                    [
                      "CAD Modelling (Frame)",
                      <span><Bdg level="high">R</Bdg> <Bdg level="medium">A</Bdg></span>,
                      <Bdg level="low">C</Bdg>,
                      "—",
                      "—",
                      "—",
                      "—"
                    ],
                    [
                      "Composite Canopy Design",
                      <Bdg level="backlog">I</Bdg>,
                      <Bdg level="low">C</Bdg>,
                      <span><Bdg level="high">R</Bdg> <Bdg level="medium">A</Bdg></span>,
                      "—",
                      "—",
                      "—"
                    ],
                    [
                      "Deployment Mechanism Design",
                      <Bdg level="backlog">I</Bdg>,
                      <Bdg level="low">C</Bdg>,
                      "—",
                      <span><Bdg level="high">R</Bdg> <Bdg level="medium">A</Bdg></span>,
                      "—",
                      "—"
                    ],
                    [
                      "3D Printing + Mech. Assembly",
                      <span><Bdg level="high">R</Bdg> <Bdg level="medium">A</Bdg></span>,
                      <Bdg level="backlog">I</Bdg>,
                      "—",
                      "—",
                      "—",
                      "—"
                    ],
                    [
                      "Electrical Assembly + Wiring",
                      <span><Bdg level="high">R</Bdg> <Bdg level="medium">A</Bdg></span>,
                      <Bdg level="low">C</Bdg>,
                      "—",
                      "—",
                      "—",
                      "—"
                    ],
                    [
                      "Pixhawk 4 Mini Config + GPS",
                      <span><Bdg level="high">R</Bdg> <Bdg level="medium">A</Bdg></span>,
                      <Bdg level="low">C</Bdg>,
                      "—",
                      "—",
                      "—",
                      "—"
                    ],
                    [
                      "Flight Testing + Validation",
                      <span><Bdg level="high">R</Bdg> <Bdg level="medium">A</Bdg></span>,
                      <Bdg level="low">C</Bdg>,
                      "—",
                      "—",
                      "—",
                      "—"
                    ],
                    [
                      "Structural Iteration (Ph. 6)",
                      <span><Bdg level="high">R</Bdg> <Bdg level="medium">A</Bdg></span>,
                      <Bdg level="low">C</Bdg>,
                      "—",
                      "—",
                      "—",
                      "—"
                    ],
                    [
                      "Technical Documentation",
                      <span><Bdg level="high">R</Bdg> <Bdg level="medium">A</Bdg></span>,
                      <Bdg level="low">C</Bdg>,
                      "—",
                      "—",
                      "—",
                      <Bdg level="backlog">I</Bdg>
                    ],
                    [
                      "Final Presentation",
                      <Bdg level="high">R</Bdg>,
                      <Bdg level="medium">A</Bdg>,
                      <Bdg level="backlog">I</Bdg>,
                      <Bdg level="backlog">I</Bdg>,
                      "—",
                      <Bdg level="backlog">I</Bdg>
                    ],
                    [
                      "Ministry Demo Request",
                      <Bdg level="high">R</Bdg>,
                      <Bdg level="medium">A</Bdg>,
                      "—",
                      "—",
                      <Bdg level="high">R</Bdg>,
                      <Bdg level="backlog">I</Bdg>
                    ],
                    [
                      "GNC Handoff Package",
                      <span><Bdg level="high">R</Bdg> <Bdg level="medium">A</Bdg></span>,
                      <Bdg level="low">C</Bdg>,
                      "—",
                      "—",
                      "—",
                      <Bdg level="backlog">I</Bdg>
                    ]
                  ]} />
              </Card><div
                style={{
                  display: "flex",
                  gap: 5,
                  padding: "5px 0",
                  flexWrap: "wrap"
                }}
              >
                  <Tag c={RD}>R = Responsible</Tag>
                  <Tag c={OR}>A = Accountable</Tag>
                  <Tag c={YL}>C = Consulted</Tag>
                  <Tag c={TS}>I = Informed</Tag>
                </div>

          {/* WBS */}
          <Sec id="wbs" title="Work Breakdown Structure (WBS)" />
          <Card>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: G,
                marginBottom: 12
              }}
            >
              AASS Drone Proof-of-Concept
            </div>
            {[
              {
                id: "1.0",
                label: "Research & Planning",
                c: RD,
                tasks: [
                  [
                    "1.1",
                    "Study UAV principles — mechanical, electrical, propulsion physics"
                  ],
                  [
                    "1.2",
                    "Define mission requirements and 5 kg payload targets"
                  ],
                  [
                    "1.3",
                    "Systems engineering methodology — lectures + application"
                  ],
                  [
                    "1.4",
                    "Thermal management study for electrically dense systems"
                  ],
                  [
                    "1.5",
                    "Drone configuration selection and rationale (quadrotor)"
                  ]
                ]
              },
              {
                id: "2.0",
                label: "Design Phase",
                c: OR,
                tasks: [
                  ["2.1", "Conceptual design and configuration layout"],
                  [
                    "2.2",
                    "CAD modelling — frame, arms, motor mounts, landing gear interface"
                  ],
                  [
                    "2.3",
                    "Component selection — Emax ECO motors, Flameback ESC, Pixhawk 4 Mini, Gens Ace LiPo"
                  ],
                  [
                    "2.4",
                    "Propulsion calculation and payload budget allocation (1.5 + 3.5 kg)"
                  ],
                  [
                    "2.5",
                    "Shade system collaboration — Dr. Majid (the deployment mechanism designer) + The doctor responsible for the canopy material design"
                  ]
                ]
              },
              {
                id: "3.0",
                label: "Prototype Manufacturing",
                c: YL,
                tasks: [
                  ["3.1", "3D printing — FDM single-piece frame fabrication"],
                  ["3.2", "Mechanical assembly — frame, arms, motor mounts"],
                  [
                    "3.3",
                    "Electrical assembly — PM06 V2 Power board, Emax motors, Flameback ESCs, wiring harness"
                  ],
                  [
                    "3.4",
                    "Subsystem integration — power + structure + control + navigation"
                  ],
                  [
                    "3.5",
                    "Document build anomalies — excessive weight, absent lower-frame protection"
                  ]
                ]
              },
              {
                id: "4.0",
                label: "Software & Configuration",
                c: GR,
                tasks: [
                  [
                    "4.1",
                    "Pixhawk 4 Mini firmware setup and full sensor calibration"
                  ],
                  [
                    "4.2",
                    "Spatial axis definition (X, Y, Z) + motor orientation CW/CCW"
                  ],
                  [
                    "4.3",
                    "Pixhawk GPS integration — waypoint and position-hold modes"
                  ],
                  [
                    "4.4",
                    "Altitude hold, flight mode, and hover stabilisation configuration"
                  ],
                  ["4.5", "Ground bench test + Flameback ESC calibration"]
                ]
              },
              {
                id: "5.0",
                label: "Testing & Validation",
                c: GR,
                tasks: [
                  [
                    "5.1",
                    "Tethered hover test — initial safety and stability check"
                  ],
                  [
                    "5.2",
                    "Full 6-stage flight: Takeoff → Waypoint → Hover → Transition → Hover → Landing"
                  ],
                  [
                    "5.3",
                    "Stability assessment under simulated payload conditions"
                  ],
                  ["5.4", "Flight endurance measurement (~3.5 minutes)"],
                  [
                    "5.5",
                    "Document structural failure modes, anomalies, and FC performance"
                  ]
                ]
              },
              {
                id: "6.0",
                label: "Optimisation & Iteration",
                c: BL,
                tasks: [
                  [
                    "6.1",
                    "Custom landing gear design and integration (lower-frame protection)"
                  ],
                  [
                    "6.2",
                    "Replace nylon props with carbon fibre — rigidity under load"
                  ],
                  [
                    "6.3",
                    "Frame weight reduction audit — component-by-component review"
                  ],
                  ["6.4", "Repeat flight test to validate all improvements"]
                ]
              },
              {
                id: "7.0",
                label: "Documentation & Delivery",
                c: BL,
                tasks: [
                  ["7.1", "Compile full 4-phase engineering documentation"],
                  ["7.2", "Prepare final presentation deck for KACST audience"],
                  ["7.3", "Formal presentation to supervisors and engineers"],
                  [
                    "7.4",
                    "GNC handoff package — specs, flight data, known issues, design rationale"
                  ]
                ]
              }
            ].map(p => (
              <div key={p.id} style={{ marginBottom: 10 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    marginBottom: 4
                  }}
                >
                  <div
                    style={{
                      padding: "1px 7px",
                      background: `${p.c}16`,
                      border: `1px solid ${p.c}45`,
                      borderRadius: 3,
                      fontSize: 9,
                      fontWeight: 700,
                      color: p.c,
                      fontFamily: "'JetBrains Mono',monospace"
                    }}
                  >
                    {p.id}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: TP }}>
                    {p.label}
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: 10,
                    borderLeft: `2px solid ${p.c}25`,
                    paddingLeft: 10
                  }}
                >
                  {p.tasks.map(([tid, tdesc], j) => (
                    <div
                      key={j}
                      style={{ display: "flex", gap: 7, marginBottom: 3 }}
                    >
                      <span
                        style={{
                          fontSize: 8,
                          color: p.c,
                          fontFamily: "'JetBrains Mono',monospace",
                          flexShrink: 0,
                          marginTop: 2
                        }}
                      >
                        {tid}
                      </span>
                      <span style={{ fontSize: 10, color: TS }}>{tdesc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Card>

          {/* TIMELINE */}
          <Sec
            id="timeline"
            title="Timeline & Milestones"
            sub="8-Week Summer Training Schedule"
          />
          <Card>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 10,
                flexWrap: "wrap"
              }}
            >
              {[
                [RD, "Research"],
                [OR, "Design"],
                [YL, "Manufacturing"],
                [GR, "Config & Testing"],
                [BL, "Iteration & Delivery"]
              ].map(([c, l], i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 4 }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 2,
                      background: c
                    }}
                  />
                  <span style={{ fontSize: 9, color: TS }}>{l}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 5 }}>
              <div style={{ width: 150, flexShrink: 0 }} />
              <div
                style={{
                  flex: 1,
                  display: "grid",
                  gridTemplateColumns: "repeat(8,1fr)",
                  gap: 1
                }}
              >
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    style={{ fontSize: 8, color: TS, textAlign: "center" }}
                  >
                    W{i + 1}
                  </div>
                ))}
              </div>
            </div>
            {[
              { label: "Research & Theory", start: 0, duration: 1, color: RD },
              {
                label: "CAD + Component Design",
                start: 1,
                duration: 2,
                color: OR
              },
              {
                label: "Component Selection",
                start: 1,
                duration: 2,
                color: OR
              },
              {
                label: "3D Printing (Frame)",
                start: 2,
                duration: 2,
                color: YL
              },
              {
                label: "Mech. + Elec. Assembly",
                start: 3,
                duration: 2,
                color: YL
              },
              {
                label: "Pixhawk Config + GPS",
                start: 4,
                duration: 1,
                color: GR
              },
              {
                label: "Flight Testing + Validation",
                start: 5,
                duration: 1,
                color: GR
              },
              {
                label: "Structural Iteration",
                start: 5,
                duration: 2,
                color: BL
              },
              { label: "Documentation", start: 5, duration: 2, color: BL },
              { label: "Final Presentation", start: 7, duration: 1, color: BL }
            ].map((bar, i) => (
              <Gantt key={i} {...bar} total={8} />
            ))}
          </Card>
          <Card>
            <Lbl text="Key Milestones" color={PU} />
            {[
              [
                "W1",
                "Research complete — quadrotor configuration selected and rationale documented",
                RD
              ],
              ["W2", "CAD model finalized, submitted for 3D printing", OR],
              [
                "W4",
                "Frame assembled, all electronics and subsystems integrated",
                YL
              ],
              [
                "W5",
                "Pixhawk 4 Mini calibrated — GPS + bench motor test complete",
                GR
              ],
              [
                "W6",
                "Full 6-stage flight sequence completed and documented",
                GR
              ],
              [
                "W7",
                "Structural improvements: landing gear + CF props + weight reduction validated",
                BL
              ],
              [
                "W8",
                "Final presentation delivered — Ministry demo request received",
                BL
              ]
            ].map(([w, label, c], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 0",
                  borderBottom: i < 6 ? `1px solid ${DB}` : "none"
                }}
              >
                <div
                  style={{
                    background: `${c}16`,
                    border: `1px solid ${c}45`,
                    color: c,
                    padding: "2px 6px",
                    borderRadius: 3,
                    fontSize: 8,
                    fontFamily: "'JetBrains Mono',monospace",
                    fontWeight: 700,
                    flexShrink: 0
                  }}
                >
                  {w}
                </div>
                <span style={{ fontSize: 10, color: TP, flex: 1 }}>
                  {label}
                </span>
                <span style={{ color: GR, fontSize: 11, fontWeight: 700 }}>
                  ✓
                </span>
              </div>
            ))}
          </Card>

          {/* RISK + FMEA + RAID */}
          <Sec
            id="risks"
            title="Risk Register, FMEA & RAID Log"
            sub="Integrated risk management across all dimensions"
          />
          <Card style={{ padding: 0 }}>
            <Tbl
              headers={[
                "#",
                "Risk",
                "Type",
                "Probability",
                "Impact",
                "Score",
                "Mitigation",
                "Status"
              ]}
rows={[
  [
    <span style={{ fontWeight: 500 }}>R-01</span>,
    "Bottom frame damage during hard landings — no protection",
    "Technical",
    <Bdg level="high">High</Bdg>,
    <Bdg level="medium">Medium</Bdg>,
    <span style={{ color: TS, fontWeight: 700 }}>6</span>,
    "Custom landing gear designed and added post initial testing",
    <Bdg level="done">Resolved</Bdg>
  ],
  [
    <span style={{ fontWeight: 500 }}>R-02</span>,
    "Propeller deformation under load (nylon flex)",
    "Technical",
    <Bdg level="medium">Medium</Bdg>,
    <Bdg level="high">High</Bdg>,
    <span style={{ color: TS, fontWeight: 700 }}>6</span>,
    "Replace nylon with carbon fibre — rigidity confirmed under load",
    <Bdg level="done">Resolved</Bdg>
  ],
  [
    <span style={{ fontWeight: 500 }}>R-03</span>,
    "Frame weight exceeds thrust capacity — cannot lift payload",
    "Technical",
    <Bdg level="high">High</Bdg>,
    <Bdg level="high">High</Bdg>,
    <span style={{ color: TS, fontWeight: 700 }}>9</span>,
    "Weight audit per phase; CF props; component substitution",
    <Bdg level="info">Mitigated</Bdg>
  ],
  [
    <span style={{ fontWeight: 500 }}>R-04</span>,
    "Pixhawk misconfiguration causing unstable flight",
    "Technical",
    <Bdg level="medium">Medium</Bdg>,
    <Bdg level="high">High</Bdg>,
    <span style={{ color: TS, fontWeight: 700 }}>6</span>,
    "Tethered test before free flight; subsystem validation sequence",
    <Bdg level="info">Mitigated</Bdg>
  ],
  [
    <span style={{ fontWeight: 500 }}>R-05</span>,
    "Umbrella disrupts rotor airflow — drone destabilised",
    "Systems",
    <Bdg level="medium">Medium</Bdg>,
    <Bdg level="high">High</Bdg>,
    <span style={{ color: TS, fontWeight: 700 }}>6</span>,
    "Canopy is made of composite permeable material, for airflow stability",
    <Bdg level="info">Mitigated</Bdg>
  ],
  [
    <span style={{ fontWeight: 500 }}>R-06</span>,
    "Time constraint — prototype not complete before training ends",
    "Schedule",
    <Bdg level="medium">Medium</Bdg>,
    <Bdg level="high">High</Bdg>,
    <span style={{ color: TS, fontWeight: 700 }}>6</span>,
    "Testable imperfect prototype prioritised over untested perfect design",
    <Bdg level="low">Accepted</Bdg>
  ],
  [
    <span style={{ fontWeight: 500 }}>R-07</span>,
    "Self-learning gap — zero prior drone experience",
    "Human",
    <Bdg level="high">High</Bdg>,
    <Bdg level="medium">Medium</Bdg>,
    <span style={{ color: TS, fontWeight: 700 }}>6</span>,
    "Supervisor consultation; iterative self-directed learning; trial-based",
    <Bdg level="low">Accepted</Bdg>
  ],
  [
    <span style={{ fontWeight: 500 }}>R-08</span>,
    "Ministry loses interest before full prototype ready",
    "Stakeholder",
    <Bdg level="Backlog">Low</Bdg>,
    <Bdg level="high">High</Bdg>,
    <span style={{ color: TS, fontWeight: 700 }}>3</span>,
    "Compelling PoC presentation; supervisor maintains Ministry channel",
    <Bdg level="deferred">Monitor</Bdg>
  ]
]}
            />
          </Card>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              marginTop: 10
            }}
          >
            <Card>
              <Lbl
                text="FMEA-lite — Failure Mode & Effects Analysis"
                color={PU}
              />
              <Tbl
                headers={["Failure Mode", "Effect", "Severity", "Mitigation"]}
                rows={[
                  [
                    "Propeller deformation",
                    "Thrust loss + oscillation",
                    <Bdg level="high">High</Bdg>,
                    "CF props; bench load test pre-flight"
                  ],
                  [
                    "Hard landing (no gear)",
                    "Frame fracture + FC damage",
                    <Bdg level="high">High</Bdg>,
                    "Custom landing gear post test"
                  ],
                  [
                    "Airflow disruption by shade",
                    "Pitch/roll instability",
                   <Bdg level="high">High</Bdg>,
                    "Permeable composite"
                  ],
                  [
                    "Emax motor overheating",
                    "Thrust reduction / shutdown",
                   <Bdg level="medium">Medium</Bdg>,
                    "Thermal margins; duty cycle limits"
                  ],
                  [
                    "GPS signal loss",
                    "Position drift in hover mode",
                    <Bdg level="medium">Medium</Bdg>,
                    "Manual control fallback configured"
                  ],
                  [
                    "Gens Ace battery voltage sag",
                    "Power dropout mid-flight",
                    <Bdg level="medium">Medium</Bdg>,
                    "50C discharge rating; load-tested"
                  ]
                ]}
              />
            </Card>
            <Card>
              <Lbl text="RAID Log" color={PU} />
              {[
                {
                  cat: "Risks",
                  c: RD,
                  items: [
                    "UAV instability under full payload",
                    "Battery endurance limited to ~3.5 min",
                    "Airflow disruption from umbrella canopy at scale"
                  ]
                },
                {
                  cat: "Assumptions",
                  c: OR,
                  items: [
                    "Composite material is aerodynamically stable in hover",
                    "Pixhawk 4 Mini GPS provides sufficient positional accuracy",
                    "KACST lab resources remain available throughout training",
                    "Supervisors provide timely technical feedback during reviews",
                    "Ministry engagement continues if PoC is compelling",
                  ]
                },
                {
                  cat: "Issues (Encountered & Resolved)",
                  c: YL,
                  items: [
                    "Excessive structural weight → weight reduction applied",
                    "No lower-frame protection → landing gear added",
                    "Nylon prop deformation → replaced with carbon fibre"
                  ]
                },
                {
                  cat: "Dependencies",
                  c: GR,
                  items: [
                    "Pixhawk 4 Mini reliability for waypoint flight sequencing",
                    "GNC team availability for Phase 2 algorithm development",
                    "Propulsion-to-weight ratio - gates payload validation",
                    "The completion of the canopy composite material and deployment mechanism designs by the specialist doctors",
                    "KACST channel to Ministry - required for formal engagement",
                  ]
                }
              ].map((r, i) => (
                <div key={i} style={{ marginBottom: 9 }}>
                  <div
                    style={{
                      fontSize: 8,
                      color: r.c,
                      fontWeight: 700,
                      marginBottom: 3
                    }}
                  >
                    {r.cat.toUpperCase()}
                  </div>
                  {r.items.map((item, j) => (
                    <div
                      key={j}
                      style={{
                        fontSize: 9,
                        color: TS,
                        padding: "2px 0",
                        borderBottom:
                          j < r.items.length - 1 ? `1px solid ${DB}` : ""
                      }}
                    >
                      <span style={{ color: r.c }}>· </span>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </Card>
          </div>

          {/* COMMS */}
          <Sec id="comms" title="Communication Plan" />
          <Card style={{ padding: 0 }}>
            <Tbl
              headers={[
                "Communication",
                "Audience",
                "Frequency",
                "Format",
                "Owner",
                "Purpose"
              ]}
              rows={[
                [
                  "Progress Update",
                  "KACST Supervisors",
                  <Bdg level="high">Weekly</Bdg>,
                  "Verbal / informal meeting",
                  "Engineer",
                  "Share progress, surface blockers, align on next steps"
                ],
                [
                  "Design Review",
                  "KACST Supervisors",
                  <Bdg level="medium">Bi-weekly</Bdg>,
                  "CAD / build walkthrough",
                  "Engineer",
                  "Technical validation before proceeding to next phase"
                ],
                [
                  "Shade System Workshop",
                  "Dr. Majid - Deployment mechanism designer + Dr. Canopy material designer",
                  <Bdg level="low">As needed</Bdg>,
                  "Technical consultation",
                  "Engineer + Doctors",
                  "Canopy material and deployment mechanism coordination"
                ],
                [
                  "Joint Cohort Lectures",
                  "All Training Participants",
                 <Bdg level="done">Scheduled</Bdg>,
                  "Formal lecture",
                  "KACST Instructors",
                  "Thermal control + systems engineering principles"
                ],
                [
                  "Engineering Log",
                  "Self / GNC Team",
                  <Bdg level="info">Daily</Bdg>,
                  "Written documentation",
                  "Engineer",
                  "Capture all decisions, anomalies, and rationale across phases"
                ],
                [
                  "Final Presentation",
                  "KACST Researchers + Engineers",
                  <Bdg level="purple">W8</Bdg>,
                  "Formal slide + live demo",
                  "Engineer",
                  "Showcase complete PoC — all 4 phases documented"
                ],
                [
                  "Ministry Response",
                  "Ministry of Hajj & Umrah",
                  <Bdg level="done">Scheduled</Bdg>,
                  "Formal briefing + demo",
                  "Engineer + Supervisor",
                  "Full-system PoC demo — advance to prototype phase"
                ]
              ]}
            />
          </Card>

          {/* KPIS + FLIGHT DATA */}
          <Sec
            id="kpis"
            title="KPIs & Flight Data"
            sub="Quantified outcomes against defined targets"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 8,
              marginBottom: 10
            }}
          >
            {[
              [
                "Payload Capacity",
                "≥ 5 kg",
                "5 kg architecture confirmed",
                "met"
              ],
              ["Stable Hover", "Achieved", "Documented + validated", "met"],
              [
                "Full Flight Sequence",
                "6-stage Takeoff → Land",
                "Completed and documented",
                "met"
              ],
              ["Flight Endurance", "—", "~3.5 minutes stable", "context"],
              [
                "Structural Flaws Resolved",
                "≥ 2",
                "3 resolved (weight, gear, CF props)",
                "exceeded"
              ],
              [
                "FC + GPS Configured",
                "Pixhawk 4 Mini",
                "Axes, GPS, waypoints, altitude",
                "met"
              ],
              ["Phases Documented", "4 / 4", "4 / 4 complete", "met"],
              [
                "Ministry Engagement",
                "Interest confirmed",
                "Full demo formally requested",
                "exceeded"
              ],
              [
                "GNC Continuation",
                "Initiated",
                "Algorithm development underway",
                "exceeded"
              ]
            ].map(([label, target, actual, status], i) => {
              const sc = { met: GR, exceeded: BL, context: G },
                sl = { met: "MET ✓", exceeded: "EXCEEDED ↑", context: "DATA" }
              const c = sc[status]
              return (
                <Card key={i} style={{ padding: "12px 14px" }}>
                  <div
                    style={{
                      fontSize: 10,
                      color: TS,
                      marginBottom: 7,
                      lineHeight: 1.35
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: TP,
                      fontWeight: 600,
                      marginBottom: 3
                    }}
                  >
                    {actual}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <span style={{ fontSize: 9, color: TS }}>
                      Target: {target}
                    </span>
                    <span
                      style={{
                        fontSize: 8,
                        color: c,
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono',monospace"
                      }}
                    >
                      {sl[status]}
                    </span>
                  </div>
                </Card>
              )
            })}
          </div>
          <Card>
            <Lbl text="Validated Flight Sequence" color={YL} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 4
              }}
            >
              {[
                "Takeoff",
                "Waypoint Transition",
                "Hover Stabilisation",
                "Position Transition",
                "Hover",
                "Landing"
              ].map((step, i, arr) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 4 }}
                >
                  <div
                    style={{
                      background: `${YL}12`,
                      border: `1px solid ${YL}40`,
                      borderRadius: 6,
                      padding: "6px 10px",
                      textAlign: "center"
                    }}
                  >
                    <div
                      style={{
                        fontSize: 8,
                        color: YL,
                        fontWeight: 700,
                        marginBottom: 1
                      }}
                    >
                      0{i + 1}
                    </div>
                    <div style={{ fontSize: 9, color: TP, fontWeight: 500 }}>
                      {step}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ fontSize: 10, color: TS }}>→</div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 9, fontSize: 10, color: TS }}>
              <span style={{ color: YL, fontWeight: 600 }}>Endurance: </span>
              ~3.5 minutes stable flight ·&nbsp;
              <span style={{ color: YL, fontWeight: 600 }}>Platform: </span>
              Pixhawk 4 Mini + GPS ·&nbsp;
              <span style={{ color: YL, fontWeight: 600 }}>Status: </span>Fully
              documented and validated ✓
            </div>
          </Card>

          {/* TOOLS */}
          <Sec id="tools" title="Tools, Systems & Concepts Used" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              marginBottom: 10
            }}
          >
            {[
              {
                cat: "Engineering & Fabrication",
                c: RD,
                items: [
                  "CAD modelling (SolidWorks / Fusion 360)",
                  "3D printing — FDM fabrication workflow",
                  "UAV structural design + mechanical assembly",
                  "Electrical integration + wiring harness",
                  "Pixhawk 4 Mini flight controller configuration",
                  "UAV propulsion system integration"
                ]
              },
              {
                cat: "Hardware & Embedded Systems",
                c: OR,
                items: [
                  "Pixhawk 4 Mini — FC system (PX4 / ArduPilot)",
                  "Flameback 45A ESC calibration + integration",
                  "Pixhawk GPS module — waypoint + position hold",
                  "Gens Ace 5000mAh 50C LiPo power system",
                  "PM06 V2 power management board",
                  "Radiolink R9DS RC receiver system"
                ]
              },
              {
                cat: "Engineering Concepts Applied",
                c: YL,
                items: [
                  "Thrust-to-weight ratio optimisation",
                  "UAV aerodynamics + hover stability",
                  "Payload engineering — mass allocation",
                  "Thermal control in electrically dense systems",
                  "Systems engineering methodology",
                  "Guidance, Navigation & Control (GNC) — conceptual",
                  "Multi-agent / swarm operational concepts",
                  "Structural optimisation + iterative prototyping"
                ]
              },
              {
                cat: "Documentation & PM",
                c: GR,
                items: [
                  "Daily engineering log — all 4 phases",
                  "Structured 4-phase engineering documentation",
                  "GNC handoff technical package",
                  "Final presentation deck",
                  "WBS, RACI, Risk Register, RAID, FMEA",
                  "Hybrid Waterfall + Agile PM methodology"
                ]
              }
            ].map((cat, i) => (
              <Card key={i} style={{ borderTop: `3px solid ${cat.c}` }}>
                <Lbl text={cat.cat} color={cat.c} />
                {cat.items.map((item, j) => (
                  <div
                    key={j}
                    style={{ display: "flex", gap: 5, marginBottom: 4 }}
                  >
                    <span style={{ color: cat.c, fontSize: 9 }}>◆</span>
                    <span style={{ fontSize: 10, color: TS, lineHeight: 1.4 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </Card>
            ))}
          </div>

          {/* METHODOLOGY */}
          <Sec id="methodology" title="Methodology" sub="Waterfall foundation + Agile problem-solving · Agile Board + Burndown"/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
            <Card style={{borderTop:`3px solid ${RD}`}}>
              <Lbl text="Waterfall (Primary Structure)" color={RD}/>
              <p style={{fontSize:10,color:TS,lineHeight:1.7,margin:"0 0 10px"}}>Sequential, phase-gated execution suited to hardware constraints and a solo 8-week window. Each phase had defined deliverables before the next began.</p>
              {["Research & Planning","Design Phase","Prototype Manufacturing","Software & Configuration","Testing & Validation","Optimisation & Iteration","Documentation & Delivery"].map((p,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:7,marginBottom:4}}>
                  <div style={{width:18,height:18,borderRadius:"50%",background:`${RD}15`,border:`1px solid ${RD}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:RD,fontWeight:700,flexShrink:0}}>{i+1}</div>
                  <span style={{fontSize:10,color:TS}}>{p}</span>
                </div>
              ))}
            </Card>
            <Card style={{borderTop:`3px solid ${OR}`}}>
              <Lbl text="Agile (Embedded Principles)" color={OR}/>
              <p style={{fontSize:10,color:TS,lineHeight:1.7,margin:"0 0 10px"}}>Within phases, problems were resolved iteratively — interim fixes applied and improvements documented rather than blocking progress.</p>
              {[["Working Prototype over Perfect Design","Functional imperfect prototype on time beats untested ideal — AASS demonstrated this across every phase"],["Rapid Feedback Loops","Each flight test directly informed the next engineering decision — no waiting for perfect conditions"],["Transparent Backlog","Structural flaws explicitly logged and deferred — never hidden, always traceable"],["Definition of Done","'Stable 6-stage flight sequence documented' — not just 'it flew once'"],["MVP Mindset","Flying Pixhawk platform = MVP; full shade integration is post-MVP scope"]].map(([p,d],i)=>(
                <div key={i} style={{marginBottom:7}}><span style={{fontSize:10,color:OR,fontWeight:600}}>{p}: </span><span style={{fontSize:10,color:TS}}>{d}</span></div>
              ))}
            </Card>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:10}}>
            <Card>
              <Lbl text="Agile Board" color={PU}/>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:7}}>
                {[{col:"Backlog",c:YL,items:["GNC algorithms","Swarm coordination","Obstacle avoidance","Outdoor field testing","Full umbrella flight integration","Long-endurance optimisation"]},
                  {col:"In Progress",c:BL,items:["GNC dev (external team)","Ministry demo prep","Full prototype ecosystem build"]},
                  {col:"Testing",c:IN,items:["CF prop validation","Post-weight-reduction hover","Landing gear load test"]},
                  {col:"Done ✓",c:GR,items:["CAD + 3D print","Mech + Elec assembly","Pixhawk config + GPS","6-stage flight test","Landing gear","CF props","Documentation","Presentation","Ministry interest"]},
                ].map((col,i)=>(
                  <div key={i}>
                    <div style={{padding:"3px 0",textAlign:"center",fontSize:9,fontWeight:700,color:col.c,marginBottom:6,borderBottom:`1px solid ${col.c}35`}}>{col.col}</div>
                    {col.items.map((item,j)=><div key={j} style={{background:CD,border:`1px solid ${DB}`,borderRadius:4,padding:"4px 6px",marginBottom:4,fontSize:9,color:TS,lineHeight:1.3,borderLeft:`2px solid ${col.c}40`}}>{item}</div>)}
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <Lbl text="Hardware Burn Down Chart (8-Week)" color={PU}/>
              <p style={{fontSize:9,color:TS,marginBottom:8,lineHeight:1.5,marginTop:-3}}>Hardware shows a staircase pattern — plateaus during manufacturing, sharp drops at integration and test milestones.</p>
              <svg viewBox="0 0 300 190" style={{width:"100%",display:"block"}} overflow="hidden">
                <defs>
                  <clipPath id="bd">
                    <rect x="28" y="10" width="265" height="155"/>
                  </clipPath>
                </defs>
                {/* Horizontal grid lines + Y labels */}
                {[{pct:"0%",y:10},{pct:"25%",y:49},{pct:"50%",y:88},{pct:"75%",y:126},{pct:"100%",y:165}].map(({pct,y})=>(
                  <g key={pct}>
                    <line x1="28" y1={y} x2="293" y2={y} stroke={DB} strokeWidth="0.6" strokeDasharray="3,3"/>
                    <text x="25" y={y+3} fontSize="7" fill={TS} textAnchor="end" fontFamily="DM Sans">{pct}</text>
                  </g>
                ))}
                {/* Left axis */}
                <line x1="28" y1="10" x2="28" y2="165" stroke={DB} strokeWidth="0.6"/>
                {/* X-axis week labels */}
                {["W1","W2","W3","W4","W5","W6","W7","W8"].map((w,i)=>(
                  <text key={w} x={28+(i+0.5)*33.1} y="178" fontSize="7" fill={TS} textAnchor="middle" fontFamily="DM Sans">{w}</text>
                ))}
                {/* Ideal diagonal - dashed gold */}
                <line clipPath="url(#bd)" x1="28" y1="10" x2="293" y2="165" stroke={`${G}80`} strokeWidth="1" strokeDasharray="5,4"/>
                {/* Actual staircase - blue */}
                <polyline clipPath="url(#bd)"
                  points="28,10 61,10 61,21 94,21 94,50 127,50 127,72 161,72 161,92 194,92 194,107 227,107 227,126 260,126 260,143 293,165"
                  fill="none" stroke={GR} strokeWidth="2" strokeLinejoin="miter"
                />
              </svg>
              {/* Legend */}
              <div style={{display:"flex",gap:14,marginTop:2}}>
                <div style={{display:"flex",alignItems:"center",gap:5}}>
                  <svg width="20" height="10" style={{flexShrink:0}}>
                    <line x1="0" y1="5" x2="20" y2="5" stroke={`${G}80`} strokeWidth="1" strokeDasharray="5,4"/>
                  </svg>
                  <span style={{fontSize:8,color:TS}}>Ideal</span>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:5}}>
                  <svg width="20" height="10" style={{flexShrink:0}}>
                    <line x1="0" y1="5" x2="20" y2="5" stroke={GR} strokeWidth="2"/>
                  </svg>
                  <span style={{fontSize:8,color:TS}}>Actual (hardware staircase)</span>
                </div>
              </div>
            </Card>
          </div>
         
          {/* SYSTEMS ARCHITECTURE */}
          <Sec
            id="architecture"
            title="Systems Architecture"
            sub="Four integrated subsystems · Systems engineering perspective"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 8,
              marginBottom: 10
            }}
          >
            {[
              {
                sys: "Mechanical System",
                c: RD,
                role:
                  "Structural integrity, load-bearing, and physical platform for all subsystems",
                comps: [
                  "Custom 4-arm quadrotor airframe — FDM 3D printed (single-piece)",
                  "Custom landing gear — added post-test for lower-frame protection",
                  "Motor mounts integrated into frame",
                  "Umbrella attachment interface",
                  "Composite shade membrane"
                ]
              },
              {
                sys: "Electrical System",
                c: OR,
                role:
                  "Power delivery and regulation across all actuators and control electronics",
                comps: [
                  "4× Emax ECO 2207 1900KV brushless DC motors",
                  "4× Flameback 45A ESCs",
                  "Gens Ace 5000mAh 50C 14.8V LiPo battery",
                  "PM06 V2 power management board",
                  "Wiring harness + power distribution"
                ]
              },
              {
                sys: "Control & Navigation System",
                c: YL,
                role:
                  "Sensor fusion, stable flight, GPS positioning, and waypoint sequencing",
                comps: [
                  "Pixhawk 4 Mini flight controller (PX4 / ArduPilot)",
                  "Pixhawk GPS — position hold + waypoint mode",
                  "Radiolink R9DS RC receiver (pilot input)",
                  "Spatial axis definition (X, Y, Z) + motor orientation CW/CCW",
                  "Altitude hold · Waypoint mode · Hover stabilisation"
                ]
              },
              {
                sys: "Mission System (Concept)",
                c: GR,
                role:
                  "Operational purpose layer — the reason the platform exists",
                comps: [
                  "Deployable composite ccanopy",
                  "Retractable deployment mechanism",
                  "Shade coverage radius per drone (TBD — constellation sizing)",
                  "Constellation coordination protocol (GNC phase — in progress)",
                  "Crowd tracking integration"
                ]
              }
            ].map((s, i) => (
              <Card key={i} style={{ borderTop: `3px solid ${s.c}` }}>
                <Lbl text={s.sys} color={s.c} />
                <div
                  style={{
                    fontSize: 10,
                    color: TS,
                    lineHeight: 1.55,
                    marginBottom: 9,
                    fontStyle: "italic"
                  }}
                >
                  {s.role}
                </div>
                {s.comps.map((comp, j) => (
                  <div
                    key={j}
                    style={{ display: "flex", gap: 5, marginBottom: 3 }}
                  >
                    <span style={{ color: s.c, fontSize: 9 }}>◆</span>
                    <span style={{ fontSize: 9, color: TS, lineHeight: 1.4 }}>
                      {comp}
                    </span>
                  </div>
                ))}
              </Card>
            ))}
          </div>
          <Card style={{ borderColor: `${G}30`, background: `${G}05` }}>
            <Lbl
              text="Systems Engineering — Six Simultaneous Constraints"
              color={BL}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 9
              }}
            >
              {[
                [
                  "Thrust",
                  "Must exceed total system weight. Every gram added to structure or electronics is a gram taken from payload capacity."
                ],
                [
                  "Thermal",
                  "Emax ECO 2207 motors and Flameback ESCs must operate within heat margins — thermal performance factored into component selection."
                ],
                [
                  "Payload",
                  "Composite canopy must not disrupt rotor airflow — a permeable material design is the critical enabler of stable shade deployment."
                ],
                [
                  "Structure",
                  "Airframe must survive 4-motor vibration at operational RPM — CF props reduce resonance and deformation vs. nylon under load."
                ],
                [
                  "Energy",
                  "Gens Ace 50C LiPo provides high-discharge capability — endurance bounded to ~3.5 min at current all-up weight."
                ],
                [
                  "Control",
                  "Pixhawk 4 Mini must correct for wind, payload shifts, and rotor asymmetry — GPS position hold assists hover stability."
                ]
              ].map(([l, d], i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: 9,
                      color: TP,
                      fontWeight: 700,
                      marginBottom: 3
                    }}
                  >
                    {l.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 10, color: TS, lineHeight: 1.5 }}>
                    {d}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* TRADE-OFFS */}
          <Sec
            id="tradeoffs"
            title="Engineering Trade-off Analysis"
            sub="Core system contradiction + key decisions across all phases"
          />
          <Card
            style={{
              borderColor: `${RD}30`,
              background: `${RD}05`,
              marginBottom: 10
            }}
          >
            <Lbl text="Core Engineering Contradiction" color={RD} />
            <p style={{ fontSize: 11, color: TS, lineHeight: 1.8, margin: 0 }}>
              The UAV needed to carry and stabilise a deployable shade structure
              — without destabilising hover, blocking propeller airflow,
              introducing severe drag, or fracturing under harsh wind and rain.
              A visually ideal umbrella design would have compromised
              aerodynamic stability. The resolution:{" "}
              <strong style={{ color: TP }}>
                deliberately sacrifice visual simplicity for aerodynamic
                practicality
              </strong>{" "}
              — the composite permeable material intentionally prioritises
              airflow permeability, aerodynamic survivability, and operational
              stability over visual elegance.
            </p>
          </Card>
          <Card style={{ padding: 0, marginBottom: 10 }}>
            <Tbl
              headers={[
                "Trade-off",
                "Chosen",
                "Rejected",
                "Engineering Rationale"
              ]}
              rows={[
                [
                  "Prototype philosophy",
                  "Testable imperfect prototype (delivered)",
                  "Untested 'perfect' design (never delivered)",
                  "Engineering value comes from operational data — not elegance on paper"
                ],
                [
                  "Propellers",
                  "Carbon fibre — rigid under load",
                  "Nylon — cheaper, flexible",
                  "CF: structural integrity under load outweighs cost. Nylon deformation observed in testing."
                ],
                [
                  "Lower frame protection",
                  "Landing gear (added weight)",
                  "No landing gear (lighter)",
                  "Operational survivability outweighs marginal mass savings from no gear"
                ],
                [
                  "Canopy material",
                  "Permeable composite — airflow passes through",
                  "Solid canopy — full shade coverage",
                  "Solid canopy blocks rotor airflow → unstable platform → mission failure"
                ],
                [
                  "Project scope",
                  "PoC flying platform (feasibility validated)",
                  "Full swarm",
                  "GNC/swarm adds 10× complexity — Ministry needs feasibility proof first"
                ],
                [
                  "Weight management",
                  "Iterative reduction per phase",
                  "All components fixed at design stage",
                  "Real all-up weight is only known after build — must remain adaptive"
                ]
              ]}
            />
          </Card>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 8
            }}
          >
            {[
              [
                "Speed vs Perfection",
                OR,
                "Rapid iteration over exhaustive planning. Test → discover → fix. AASS proved this across every phase."
              ],
              [
                "Cost vs Rigidity",
                YL,
                "CF props cost more but perform under load. In load-critical applications, component quality is non-negotiable."
              ],
              [
                "Strength vs Mass",
                GR,
                "Every structural reinforcement costs payload capacity. Design to minimum viable strength — not maximum."
              ],
              [
                "Feasibility vs Scalability",
                BL,
                "Phase 1 proves it's possible. Phases 2–6 scale it. Conflating the two kills both."
              ]
            ].map(([title, c, desc], i) => (
              <Card key={i} style={{ borderTop: `3px solid ${c}` }}>
                <div
                  style={{
                    fontSize: 10,
                    color: c,
                    fontWeight: 700,
                    marginBottom: 6
                  }}
                >
                  {title}
                </div>
                <div style={{ fontSize: 10, color: TS, lineHeight: 1.55 }}>
                  {desc}
                </div>
              </Card>
            ))}
          </div>

          {/* CONOPS */}
          <Sec
            id="conops"
            title="CONOPS"
            sub="Concept of Operations — Full Autonomous Shading System Operational Flow"
          />
          <Card>
            <Lbl text="Operational Sequence" color={G} />
            {[
              {
                step: "01",
                label: "Crowd Density Identification",
                detail:
                  "Ground sensors or aerial surveillance detect high-density pilgrim zones approaching peak outdoor exposure during crowd movement between sites.",
                c: RD
              },
              {
                step: "02",
                label: "UAV Dispatch",
                detail:
                  "AASS drones launched from nearest staging point — each pre-loaded with stowed composite shade membrane at full battery charge.",
                c: OR
              },
              {
                step: "03",
                label: "Dynamic Positioning",
                detail:
                  "Drones navigate via GNC algorithms to target zone — maintaining safe separation using formation logic and entering synchronised hover above pilgrim group.",
                c: YL
              },
              {
                step: "04",
                label: "Shade Deployment",
                detail:
                  "Each UAV deploys composite canopy via the retractable mechanism — permeable membrane unfurls to cover defined ground area without destabilising rotor hover.",
                c: GR
              },
              {
                step: "05",
                label: "Adaptive Formation Tracking",
                detail:
                  "Constellation dynamically follows crowd movement in real time — adjusting positions to maintain continuous shade coverage as pilgrims transit between zones.",
                c: BL
              },
              {
                step: "06",
                label: "Battery Rotation Cycle",
                detail:
                  "Drones reaching battery threshold return autonomously to charging stations — replacements enter formation maintaining uninterrupted shade coverage throughout transit.",
                c: IN
              }
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: "10px 0",
                  borderBottom: i < 5 ? `1px solid ${DB}` : "none"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: `${s.c}15`,
                      border: `2px solid ${s.c}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 9,
                      fontWeight: 900,
                      color: s.c,
                      fontFamily: "'JetBrains Mono',monospace"
                    }}
                  >
                    {s.step}
                  </div>
                  {i < 5 && (
                    <div
                      style={{
                        width: 1,
                        flex: 1,
                        background: `${s.c}20`,
                        marginTop: 3,
                        minHeight: 12
                      }}
                    />
                  )}
                </div>
                <div style={{ flex: 1, paddingBottom: 8 }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: TP,
                      marginBottom: 3
                    }}
                  >
                    {s.label}
                  </div>
                  <div style={{ fontSize: 10, color: TS, lineHeight: 1.6 }}>
                    {s.detail}
                  </div>
                </div>
              </div>
            ))}
          </Card>

          {/* SWOT + PESTLE */}
          <Sec
            id="analysis"
            title="SWOT & PESTLE Analysis"
            sub="Strategic positioning and environmental factors"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              marginBottom: 10
            }}
          >
            {[
              {
                label: "Strengths",
                c: GR,
                items: [
                  "Original humanitarian concept addressing a documente, real, recurring seasonal safety problem",
                  "Full end-to-end engineering self directed execution, with zero prior experience from concept to tested flight, which demonstrates high capacity for rapid learning and application across multiple engineering disciplines",
                  "Ministry of Hajj institutional interest formally confirmed early on — powerful institutional validation and potential pathway to impact",
                  "Systems engineering mindset — all subsystems designed as integrated whole",
                  "KACST doctor co-development of critical shade system components",
                  "Direct Vision 2030 alignment — smart infrastructure for global-scale gathering"
                ]
              },
              {
                label: "Weaknesses",
                c: OR,
                items: [
                  "Prototype stage only — not production ready",
                  "~3.5 min flight endurance limits practical coverage window",
                  "No swarm or constellation implementation — single-drone only",
                  "Limited real-world environmental testing (wind, rain, crowd density)",
                  "Umbrella not yet integrated into flying platform (concept stage)"
                ]
              },
              {
                label: "Opportunities",
                c: BL,
                items: [
                  "Smart Hajj and smart city R&D investment pipeline — Vision 2030",
                  "GNC algorithm phase unlocks full autonomous constellation operation",
                  "Outdoor labour environments in extreme heat — beyond Hajj context",
                  "International market for autonomous shading in high-temperature climates",
                  "Potential regulatory fast-track via Ministry sponsorship"
                ]
              },
              {
                label: "Threats",
                c: RD,
                items: [
                  "GACA airspace regulations may restrict UAV operations in Hajj zones",
                  "Dense crowd environments create safety risk if system fails mid-flight",
                  "Wind and rain at Hajj sites create aerodynamic challenges at scale",
                  "Battery endurance limits coverage duration without rotation infrastructure",
                  "Competing shading infrastructure solutions may attract faster Ministry funding",
                  "Dependency on composite material availability and manufacturing quality"
                ]
              }
            ].map((q, i) => (
              <Card key={i} style={{ borderLeft: `3px solid ${q.c}` }}>
                <Lbl text={q.label} color={q.c} />
                <Blt color={q.c} items={q.items} size={10} />
              </Card>
            ))}
          </div>
          <Card>
            <Lbl text="PESTLE Analysis" color={PU} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 10
              }}
            >
              {[
                [
                  "Political",
                  RD,
                  "Vision 2030 and smart infrastructure directives provide strong institutional alignment. KACST and Ministry of Hajj are key governmental stakeholders."
                ],
                [
                  "Economic",
                  OR,
                  "Reduces heat-related medical incidents at Hajj — measurable cost reduction in emergency response. Funded through KACST R&D training ecosystem."
                ],
                [
                  "Social",
                  YL,
                  "Direct safety benefit to 2+ million pilgrims annually. Addresses a recurring, documented problem with a scalable technology solution."
                ],
                [
                  "Technological",
                  GR,
                  "Dependent on UAV autonomy maturity, GNC algorithm development, and eventual swarm coordination capability. Pixhawk platform provides strong foundation."
                ],
                [
                  "Legal",
                  BL,
                  "GACA airspace regulations govern UAV operations in Saudi Arabia. Hajj zone operations require a dedicated regulatory pathway and safety certification process."
                ],
                [
                  "Environmental",
                  IN,
                  "Hot, windy, and occasionally rainy Hajj conditions create aerodynamic and thermal challenges. Composite permeability directly addresses wind load at scale."
                ]
              ].map(([l, c, d], i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: 9,
                      color: c,
                      fontWeight: 700,
                      marginBottom: 3
                    }}
                  >
                    {l.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 10, color: TS, lineHeight: 1.55 }}>
                    {d}
                  </div>
                </div>
              ))}
            </div>
          </Card>

           {/* GOVERNANCE */}
          <Sec id="governance" title="Engineering Governance" sub="Constraints · Technical debt · Decision log · Requirements traceability"/>
          <Card style={{marginBottom:10}}>
            <Lbl text="Constraint Analysis" color={PU}/>
            <Tbl headers={["Constraint","Type","Impact","Response"]} rows={[
              ["8-week training window",<Bdg level="info">Schedule</Bdg>,"Hard deadline — no extension possible","Phase-gated WBS; MVP-first; defer non-essential scope"],
              ["Solo execution",<Bdg level="medium">Resource</Bdg>,"No team redundancy or parallel workstreams","Structured daily engineering log; supervisor escalation path"],
              ["Zero prior drone experience",<Bdg level="done">Capability</Bdg>,"Steep self-directed learning curve","Independent research + iterative hardware learning approach"],
              ["Limited prototype budget",<Bdg level="low">Budget</Bdg>,"No external component procurement","Downsize intelligently; prioritise payload-critical components"],
              ["5 kg payload target",<Bdg level="high">Technical</Bdg>,"Dominates every design decision","T/W ratio drives all motor, prop, and frame selection"],
              ["Airflow-stable shade",<Bdg level="high">Technical</Bdg>,"Core system engineering contradiction","Permeable composite material (Dr. A design — purpose-built solution)"],
            ]}/>
          </Card>
          <Card style={{marginBottom:10}}>
            <Lbl text="Technical Debt Log" color={PU}/>
            <div style={{fontSize:9,color:TS,marginBottom:8,marginTop:-4}}>Known deferred items consciously accepted during PoC phase</div>
            <div style={{overflowX:"auto",borderRadius:7,border:`1px solid ${DB}`}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:10}}>
                <thead>
                  <tr style={{background:`${G}10`,borderBottom:`1px solid ${DB}`}}>
                    {[["#","60px"],["Deferred Item","auto"],["Reason Deferred","150px"],["Priority","72px"],["Next Phase Action","auto"]].map(([h,w],i)=>(
                      <th key={i} style={{padding:"8px 13px",textAlign:"left",color:G,fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:9,letterSpacing:"0.4px",whiteSpace:"nowrap",width:w}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {code:"TD-01",item:"Imperfect weight optimization — frame heavier than ideal",reason:"Time constraint",rc:BL,priority:"High",action:"Redesign frame in modular multi-part config; full weight audit with parametric CAD"},
                    {code:"TD-02",item:"Temporary landing gear solution — current gear functional, not weight-optimized",reason:"Mid-build fix",rc:G,priority:"Medium",action:"Integrate landing gear at the start of the next design iteration"},
                    {code:"TD-03",item:"No obstacle avoidance system — critical for crowd-safe operation",reason:"Out of scope",rc:GR,priority:"High",action:"Requires GNC + fusion of proximity sensors before any crowd deployment testing"},
                    {code:"TD-04",item:"Limited autonomous capability — Pixhawk handles waypoints only",reason:"Out of scope",rc:GR,priority:"Critical",action:"Full autonomy requires GNC algorithm"},
                    {code:"TD-05",item:"Battery endurance not optimized",reason:"Time constraint",rc:BL,priority:"Medium",action:"Battery endurance study + rotation cycle protocol testing required"},
                    {code:"TD-06",item:"No outdoor / wind-condition testing",reason:"Environment constraint",rc:PU,priority:"High",action:"Required before any operational field trial; wind compensation in FC tuning"},
                    {code:"TD-07",item:"Umbrella not physically integrated on flying platform",reason:"Out of scope",rc:GR,priority:"Critical",action:"Full integration test required as next PoC milestone"},
                    {code:"TD-08",item:"No swarm or multi-drone testing",reason:"Out of scope",rc:GR,priority:"Critical",action:"Constellation requires GNC + formation control + multi-agent logics"},
                    {code:"TD-09",item:"Endurance not optimized (~3.5 min)",reason:"Out of scope",rc:GR,priority:"Critical",action:"Requires lighter frame, more efficient motors, or higher-capacity battery"},
                  ].map((row,i,arr)=>{
                    const pc=row.priority==="Critical"?RD:row.priority==="High"?OR:YL;
                    return(
                    <tr key={i} style={{borderBottom:i<arr.length-1?`1px solid ${DB}`:"none",background:i%2===0?"transparent":`${TP}02`}}>
                      <td style={{padding:"10px 13px",verticalAlign:"top"}}>
                        <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,fontWeight:700,color:TP,whiteSpace:"pre"}}>{row.code.replace("-","-\n")}</span>
                      </td>
                      <td style={{padding:"10px 13px",verticalAlign:"top",color:TS,fontSize:10,lineHeight:1.5}}>{row.item}</td>
                      <td style={{padding:"10px 13px",verticalAlign:"middle"}}>
                        <span style={{display:"inline-block",padding:"3px 9px",borderRadius:20,fontSize:9,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:row.rc,background:`${row.rc}22`,border:`1px solid ${row.rc}50`}}>{row.reason}</span>
                      </td>
                      <td style={{padding:"10px 13px",verticalAlign:"middle"}}>
                        <span style={{display:"inline-block",padding:"1px 7px",borderRadius:20,fontSize:9,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:pc,background:`${pc}20`,border:`1px solid ${pc}40`}}>{row.priority}</span>
                      </td>
                      <td style={{padding:"10px 13px",verticalAlign:"top",color:TS,fontSize:10,lineHeight:1.5}}>{row.action}</td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            <Card>
              <Lbl text="Decision Log" color={RD}/>
              {[{dec:"Continue with overweight frame",rationale:"Functional imperfect prototype delivers more engineering value than restarting. Weight reduction addressed in Phase 6."},
                {dec:"Replace nylon props → CF props",rationale:"Nylon deformation observed in testing. CF props: rigidity justified by performance data, not theory. Cost tradeoff accepted."},
                {dec:"Add landing gear despite added weight",rationale:"Operational survivability outweighs marginal mass savings. Lower frame damage risk is unacceptable for a flying prototype."},
                {dec:"Prioritise PoC over full autonomy",rationale:"GNC adds 10× complexity. Ministry and KACST need feasibility proof first — autonomy is Phase 3 scope."},
                {dec:"Permeable composite canopy material",rationale:"Solid canopy blocks rotor airflow → instability → crash. Permeability is non-negotiable for hover stability at scale."},
              ].map((d,i)=>(
                <div key={i} style={{marginBottom:9}}>
                  <div style={{fontSize:10,color:TP,fontWeight:600,marginBottom:2}}>◆ {d.dec}</div>
                  <div style={{fontSize:9,color:TS,lineHeight:1.5,paddingLeft:12}}>{d.rationale}</div>
                </div>
              ))}
            </Card>
            <Card>
              <Lbl text="Requirements Traceability Matrix (RTM)" color={OR}/>
              <Tbl headers={["Requirement","Implementation","Validation"]} rows={[
                ["Stable powered flight","Pixhawk 4 Mini + Emax ECO + CF props","6-stage flight test — documented ✓"],
                ["5 kg payload architecture","T/W calc + allocation (1.5 + 3.5 kg)","Payload budget confirmed pre-build ✓"],
                ["Shade without airflow disruption","Permeable composite (Dr. A design)","Hover stability test — pre-umbrella integration"],
                ["Structural survivability","CF props + landing gear + weight audit","Post-test structural inspection ✓"],
                ["Subsystem integration","PM06 V2 + Flameback + Pixhawk + GPS","Bench test + full flight sequence ✓"],
                ["Complete documentation","4-phase log + GNC handoff package","Delivered Week 8 ✓"],
                ["Institutional engagement","KACST presentation + Ministry request","Ministry demo request received ✓"],
              ]}/>
            </Card>
          </div>

          {/* MATURITY */}
          <Sec
            id="maturity"
            title="Maturity Framing"
            sub="AASS progression: concept → fully autonomous shade constellation"
          />
          <Card>
            {[
              {
                level: "1",
                label: "Concept",
                detail:
                  "Observation of recurring pilgrim injuries → idea formed for autonomous aerial shading. Presented to KACST doctors who validated and co-developed the concept.",
                status: "complete",
                c: GR
              },
              {
                level: "2",
                label: "Feasibility (PoC)",
                detail:
                  "PoC drone designed, built, and flight-tested at KACST. Pixhawk GPS waypoint sequence validated. ~3.5 min endurance demonstrated. Ministry formally requested prototype demonstration.",
                status: "complete",
                c: GR
              },
              {
                level: "3",
                label: "Prototype",
                detail:
                  "Full-system prototype: single drone with integrated umbrella. GNC algorithm development initiated. Ministry demonstration prepared. Shade deployment validated in hover conditions.",
                status: "active",
                c: BL
              },
              {
                level: "4",
                label: "Validation",
                detail:
                  "Multi-drone constellation testing in controlled environment. Umbrella deployment validated in coordinated flight. CONOPS steps 03–04 demonstrated. Safety envelope established.",
                status: "future",
                c: TS
              },
              {
                level: "5",
                label: "Expansion",
                detail:
                  "Outdoor field trials in realistic Hajj-condition environments. GACA regulatory pathway established. Crowd tracking integration initiated. Battery rotation logistics tested.",
                status: "future",
                c: TS
              },
              {
                level: "6",
                label: "Autonomous Constellation",
                detail:
                  "Full CONOPS operational: autonomous crowd-tracking drone constellations providing continuous dynamic shade coverage during Hajj and Umrah seasons at scale.",
                status: "future",
                c: TS
              }
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: "10px 0",
                  borderBottom: i < 5 ? `1px solid ${DB}` : "none"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: `${m.c}15`,
                      border: `2px solid ${m.c}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 900,
                      color: m.c,
                      fontFamily: "'Playfair Display',serif"
                    }}
                  >
                    {m.level}
                  </div>
                  {i < 5 && (
                    <div
                      style={{
                        width: 2,
                        flex: 1,
                        background: `${m.c}20`,
                        marginTop: 3,
                        minHeight: 12
                      }}
                    />
                  )}
                </div>
                <div style={{ flex: 1, paddingBottom: 7 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 3
                    }}
                  >
                    <div style={{ fontSize: 11, fontWeight: 700, color: TP }}>
                      {m.label}
                    </div>
                    <div
                      style={{
                        padding: "2px 6px",
                        borderRadius: 4,
                        background: `${m.c}15`,
                        color: m.c,
                        fontSize: 8,
                        fontWeight: 700
                      }}
                    >
                      {m.status === "complete"
                        ? "Complete ✓"
                        : m.status === "active"
                        ? "In Progress →"
                        : "Future"}
                    </div>
                  </div>
                  <div style={{ fontSize: 10, color: TS, lineHeight: 1.6 }}>
                    {m.detail}
                  </div>
                </div>
              </div>
            ))}
          </Card>

          {/* OUTCOME */}
          <Sec id="outcome" title="Outcomes, Impact & Lessons Learned" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              marginBottom: 10
            }}
          >
            {[
              {
                cat: "Technical Outcomes",
                c: RD,
                items: [
                  "Fully operational UAV PoC — concept to flight-tested platform",
                  "6-stage flight sequence validated: Takeoff → Waypoint → Hover → Land",
                  "~3.5 min stable flight endurance with Pixhawk GPS demonstrated",
                  "CF propulsion upgrade: measurable load-performance improvement vs nylon",
                  "Pixhawk GPS integration: waypoint and position-hold capability confirmed",
                  "Full CAD → 3D print → Assemble → Test → Iterate cycle executed"
                ]
              },
              {
                cat: "PM Outcomes",
                c: OR,
                items: [
                  "7-phase WBS executed on schedule within fixed 8-week training period",
                  "3 structural issues identified, resolved, and validated by re-test",
                  "Complete 4-phase engineering documentation produced across all phases",
                  "GNC handoff package prepared enabling downstream team continuity",
                  "Trade-off discipline maintained — every decision grounded in real constraints",
                  "Ministry of Hajj formally requested full prototype demonstration"
                ]
              },
              {
                cat: "Strategic Impact",
                c: YL,
                items: [
                  "Ministry of Hajj and Umrah — full prototype demo formally requested",
                  "GNC algorithm development initiated as direct project continuation",
                  "KACST doctors co-developed critical shade system components",
                  "Addresses recurring humanitarian safety problem at global scale (~2M pilgrims)",
                  "Vision 2030 alignment: smart mobility infrastructure for world's largest annual gathering",
                  "Pathway to outdoor labour applications and extreme-heat urban environments"
                ]
              },
              {
                cat: "Personal Development",
                c: GR,
                items: [
                  "Complete UAV built from scratch — zero prior drone experience",
                  "Systems engineering applied to real multi-subsystem hardware challenge",
                  "Propulsion physics, aerodynamics, thermal management: theory to practice",
                  "End-to-end solo project management across all 7 engineering phases",
                  "Pixhawk 4 Mini programming: GPS, waypoints, axes, motor orientation mastered",
                  "Technical work presented confidently to senior KACST researchers and engineers"
                ]
              }
            ].map((cat, i) => (
              <Card key={i} style={{ borderLeft: `3px solid ${cat.c}` }}>
                <Lbl text={cat.cat} color={cat.c} />
                <Blt color={cat.c} items={cat.items} size={10} />
              </Card>
            ))}
          </div>
          <Card style={{ borderColor: `${TS}35`, background: `${TS}10` }}>
            <Lbl text="Key Lessons Learned" color={PU} />
            {[
              [
                "Testable beats perfect",
                "A functioning imperfect prototype provides more engineering value than a permanently unfinished ideal. AASS proved this — the Ministry's demo request came from a working platform, not a design concept."
              ],
              [
                "Real thrust differs from static test calculations",
                "Bench readings overestimate real-flight performance. Weight budget is a live constraint throughout build — not a number fixed at design stage."
              ],
              [
                "Systems thinking is the differentiator",
                "Structural changes affect power draw. Payload shifts affect stability. Airflow affects control. Every isolated decision propagates. AASS required managing all six constraints simultaneously."
              ],
              [
                "Document everything — especially failures",
                "The three structural flaws found mid-build became the project's strongest engineering demonstration. Failures documented are lessons delivered; failures hidden are risks deferred to the worst possible moment."
              ],
              [
                "Constraint-driven engineering produces better decisions",
                "Every component choice in AASS was driven by real constraints — weight, payload, endurance, airflow. Constraints force clarity that unconstrained design perpetually avoids."
              ],
              [
                "External interest validates concept faster than internal validation",
                "The Ministry of Hajj's demonstration request was the clearest possible signal that an engineering concept had been translated into meaningful real-world institutional impact."
              ]
            ].map(([l, d], i) => (
              <div key={i} style={{ marginBottom: 9 }}>
                <span style={{ color: TP, fontWeight: 700, fontSize: 11 }}>
                  {l}:{" "}
                </span>
                <span style={{ color: TS, fontSize: 10, lineHeight: 1.7 }}>
                  {d}
                </span>
              </div>
            ))}
          </Card>

          {/* FOOTER */}
          <div
            style={{
              marginTop: 24,
              padding: "14px 0",
              borderTop: `1px solid ${DB}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 7
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontFamily: "'Playfair Display',serif",
                  color: G
                }}
              >
                AASS · Autonomous Aerial Shade System
              </div>
              <div style={{ fontSize: 9, color: TS, marginTop: 1 }}>
                KACST – Future Economy Sector · Summer Training PoC · Phase 1
                Complete
              </div>
            </div>
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              <Tag c={G}>Phase 1 Complete</Tag>
              <Tag c={BL}>GNC Phase In Progress</Tag>
              <Tag c={OR}>Ministry Interest ✓</Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}