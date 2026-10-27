const clean = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  const webhook = process.env.DISCORD_WEBHOOK_URL;
  if (!webhook) return { statusCode: 500, body: 'Webhook not configured' };

  let body;
  try { body = JSON.parse(event.body || '{}'); } catch { return { statusCode: 400, body: 'Bad JSON' }; }

  if (body.website) return { statusCode: 200, body: 'ok' };

  const name = clean(body.name, 80);
  const discord = clean(body.discord, 64);
  const email = clean(body.email, 120);
  const script = clean(body.script, 120);
  const framework = clean(body.framework, 40);
  const details = clean(body.details, 1500);
  if (!name || !discord || !details) return { statusCode: 400, body: 'Missing fields' };

  const payload = {
    username: 'Souls Scripts Orders',
    allowed_mentions: { parse: [] },
    embeds: [{
      title: 'طلب جديد من الموقع',
      color: 0x00ff87,
      fields: [
        { name: 'الاسم', value: name, inline: true },
        { name: 'الديسكورد', value: discord, inline: true },
        { name: 'البريد', value: email || '-', inline: true },
        { name: 'السكربت المطلوب', value: script || '-', inline: true },
        { name: 'الفريمورك', value: framework || '-', inline: true },
        { name: 'التفاصيل', value: details }
      ],
      timestamp: new Date().toISOString()
    }]
  };

  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) return { statusCode: 502, body: 'Discord error' };
  return { statusCode: 200, body: 'ok' };
};
