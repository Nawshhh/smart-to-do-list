export const systemPrompt = () => {
    return `
    You are a data generator. Return ONLY valid JSON — a JSON array with exactly 6 objects.
    Do NOT include any explanation, markdown, tags, or code fences.
    Start with "[" and end with "]".
    
    Each object MUST use exactly these keys and types:
    - "name": string
    - "status": integer (1 = to-do, 2 = doing, 3 = done)
    - "priority": integer (3 = low, 2 = medium, 1 = high)
    - "completion_date": string "YYYY-MM-DD"
    - "completion_time": string "HH:MM" 24h
    - "description": string
    
    Constraints:
    - All 6 tasks belong to the same project and form a logical sequence (each follows from the previous).
    - Dates/times are realistic and in chronological order (if same date, order by time).
    - Strict JSON only: no trailing commas, no comments, no duplicate keys, do not quote integers.
    `;
}

export const promptMessage = (seed = SEED_CONTEXT) => {
    return `
    Context (do NOT include this object in the output; it is only guidance):
    ${JSON.stringify(seed)}
    
    Generate 6 succeeding to-do tasks that continue the same project after the above task.
    They must form a logical sequence (each follows from the previous).
    
    Scheduling:
    - All tasks occur strictly AFTER ${seed.completion_date} ${seed.completion_time}.
    - Keep dates/times realistic and in chronological order (if same date, order by time).
    
    Content:
    - Keep names and descriptions concise and specific (action + outcome).
    - Use appropriate priorities (1=low, 2=medium, 3=high) based on urgency/impact.
    - Use statuses that make sense for upcoming work (1 to-do, 2 doing, 3 done). 
      Earlier tasks are likely 1; the final task may be 2 if it represents project wrap-up.
    
    Output format (enforced by system message):
    - Return ONLY a JSON array (exactly 6 objects) using these keys and types:
      "name": string
      "status": integer (1..3 as defined above)
      "priority": integer (1 low, 2 medium, 3 high)
      "completion_date": "YYYY-MM-DD"
      "completion_time": "HH:MM" (24h)
      "description": string
    - No prose, no markdown, no code fences.
      `.trim();
}