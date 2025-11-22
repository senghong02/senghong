export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  // Validate required fields
  if (!body.name || !body.email || !body.subject || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    });
  }

  const telegramBotToken = config.telegramBotToken;
  const telegramChatId = config.telegramChatId;

  if (!telegramBotToken || !telegramChatId) {
    console.error('Telegram configuration missing');
    throw createError({
      statusCode: 500,
      statusMessage: 'Server configuration error',
    });
  }

  const telegramMessage = `
🔔 *New Contact Form Submission*

👤 *Name:* ${body.name}
📧 *Email:* ${body.email}
📌 *Subject:* ${body.subject}

💬 *Message:*
${body.message}

---
_Sent from Portfolio Contact Form_
`;

  try {
    const response = await $fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: telegramChatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      },
    });

    return {
      success: true,
      message: 'Message sent successfully',
    };
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send message',
    });
  }
});
