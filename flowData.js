console.log("flowData.js loaded");
console.log("flowData.js loaded");
const flowData = {
  start: {
    type: "dropdown",
    question: "症状は？",
    options: {
      "運転しない": "q0",
      "冷えが悪い": "q_c0",
      "暖まりが悪い": "q_h"
    }
  },

  // ============================
  // 運転しない
  // ============================
  q0: {
    type: "button",
    question: "表示ランプが点滅していますか？",
    yes: "valve_Blinking",
    no: "q_volt"
  },

  q_volt: {
    type: "button",
    question: "電圧は正常ですか？",
    yes: "q_control",
    no: "eleerr"
  },

  q_control: {
    type: "button",
    question: "本体の運転ボタンで運転できますか？",
    yes: "remoconerr",
    no: "controlerr"
  },

  // ============================
  // 冷えが悪い
  // ============================
  q_c0: {
    type: "button",
    question: "室内の吸込温度と吹出温度の差は\n10℃以上ですか？",
    yes: "q_c1",
    no: "q_c2"
  },

  q_c1: {
    type: "button",
    question: "風量が少ないですか？\n風切り音がしていますか？\n吹出風にムラがありますか？",
    yes: "LowAirflow",
    no: "Normal"
  },

  q_c2: {
    type: "dropdown",
    question: "低圧は0.5MPa以上ですか？\n(R22の場合は0.3Mpa以上ですか？)",
    options: {
      "yes": "q2",
      "no": "q_low",
      "圧力がわかりません": "q3"
    }
  },

  q2: {
    type: "dropdown",
    question: "低圧は1.2MPa以上ですか？\n(R22の場合は0.8Mpa以上ですか？)",
    options: {
      "yes": "q2",
      "no": "q_low",
      "圧力不明": "q3"
    }
  },

  q3: {
    type: "button",
    question: "吸入管（室外機ガス管）温度は20℃以上ですか？",
    yes: "gas",
    no: "valve"
  },

  q_low: {
    type: "button",
    question: "過熱度（SH）は5℃以下ですか？",
    yes: "valve",
    no: "gas"
  },

  // ============================
  // 暖まりが悪い（完全版）
  // ============================
  q_h: {
    type: "button",
    question: "室内の吸込温度と吹出温度の差は\n15℃以上ですか？",
    yes: "q_h1",
    no: "q_h_precheck"
  },

  q_h_precheck: {
    type: "button",
    question: "以下の状態はありますか？\n・霜取り運転中（室外機が止まる）\n・外気温が5℃以下\n・室外機に霜がついている",
    yes: "q_h_defrost",
    no: "q_h_precheck2"
  },

  q_h_defrost: {
    result: "霜取り運転中、または外気温低下の影響で\n一時的に暖まりが悪くなることがあります。\n数分〜10分ほど様子を見てください。"
  },

  q_h_precheck2: {
    type: "button",
    question: "室外機の熱交換器（フィン）に\nホコリ・ゴミ・綿ボコリが付着していますか？",
    yes: "heat_exchanger_dirty",
    no: "q_h_filter"
  },

  heat_exchanger_dirty: {
    result: "室外機熱交換器の目詰まりの可能性があります。\nフィンの清掃を行ってください。"
  },

  q_h_filter: {
    type: "button",
    question: "室内機フィルターにホコリが\n多く付着していますか？",
    yes: "heat_filter_dirty",
    no: "q_h1"
  },

  heat_filter_dirty: {
    result: "室内機フィルターの目詰まりにより\n暖房能力が低下している可能性があります。\nフィルター清掃を行ってください。"
  },

  q_h1: {
    type: "button",
    question: "風量が少ないですか？\n風切り音がしていますか？\n吹出風にムラがありますか？",
    yes: "LowAirflow",
    no: "q_h2"
  },

  q_h2: {
    type: "dropdown",
    question: "高圧は2.5MPa以上ですか？\n(R22の場合は2.0MPa以上ですか？)",
    options: {
      "yes": "q_h3",
      "no": "q_h_low",
      "圧力がわかりません": "q_h4"
    }
  },

  q_h3: {
    type: "dropdown",
    question: "高圧は3.0MPa以上ですか？\n(R22の場合は2.5MPa以上ですか？)",
    options: {
      "yes": "q_h3",
      "no": "q_h_low",
      "圧力不明": "q_h4"
    }
  },

  q_h4: {
    type: "button",
    question: "液管（室外機細い管）は\nとても熱いですか？",
    yes: "heat_gas",
    no: "heat_valve"
  },

  q_h_low: {
    type: "button",
    question: "過冷却度（SC）は5℃以下ですか？",
    yes: "heat_valve",
    no: "heat_gas"
  },

  // ============================
  // 結果ノード
  // ============================
  valve: { result: "膨張弁の詰まりの可能性が高いです。" },
  gas: { result: "ガス不足の可能性が高いです。" },
  LowAirflow: { result: "フィルターの汚れ\nファンの汚れ\n熱交換器の汚れの可能性があります" },
  valve_Blinking: { result: "メーカー別の診断をしてください。" },
  Normal: { result: "熱負荷が大きすぎるか\n能力不足の可能性があります。" },
  controlerr: { result: "基板不良の可能性があります。" },
  eleerr: { result: "電源ブレーカーで電圧を測定してください。" },
  remoconerr: { result: "リモコンか本体受信部の故障の可能性があります" },

  heat_valve: { result: "暖房側の膨張弁の詰まりの可能性があります。" },
  heat_gas: { result: "冷媒不足（ガス不足）の可能性があります。" },
  NormalHeat: { result: "熱負荷が大きすぎるか\n能力不足の可能性があります。" }
};