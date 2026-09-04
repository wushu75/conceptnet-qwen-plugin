/**
 * ConceptNet Qwen Plugin — Usage Examples
 * Run: node example.js
 */

import ConceptNetQwenPlugin from './index.js'

const plugin = new ConceptNetQwenPlugin({
  hfToken: process.env.HF_TOKEN || ''
})

async function runExamples() {
  console.log('ConceptNet × Qwen Plugin — Examples\n')
  console.log('='.repeat(50))

  const examples = [
    '生成月度销售报告',                          // Chinese — Generate monthly sales report
    'Send the proposal when the client approves', // English L2
    'Alert the team before the deadline',          // English L3
    'Automatically update CRM after every call',   // English L4
    'Envoyer le rapport quand le contrat est signé', // French L2
    'تنبيه المدير قبل انتهاء العقد',              // Arabic L3
  ]

  for (const text of examples) {
    try {
      const result = await plugin.classify(text)
      console.log(`\nInput: "${text}"`)
      console.log(`Layer: L${result.intent_layer} — ${result.intent_label}`)
      console.log(`Qwen tool type: ${result.qwen_tool_type}`)
      console.log(`Action: ${result.agent_action}`)
      console.log(`Confidence: ${(result.confidence * 100).toFixed(1)}%`)
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }
}

runExamples()
