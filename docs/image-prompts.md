# Home page image prompts

The home page has 7 photo slots. Until a photo is added, each one shows a built-in illustration, so nothing looks broken.

## How to add a photo

1. Generate the image using the prompt below.
2. Export it as JPG or WebP at the size listed, and keep the file under about 400 KB.
3. Save it in `public/images/home/` with the filename listed.
4. In `src/content/media.ts`, set that slot's `src` (for example, `src: "/images/home/hero.jpg"`).

You can also send the images in the project chat and Claude will add them.

## Shared style (add this to every prompt)

> Premium editorial corporate photography, modern and optimistic. Deep navy (#070a2b) and electric blue (#1677ff) tones, with a cyan (#2ee6ff) accent from screens and soft rim light. The setting is a clean, contemporary Indian tech office with glass, warm wood and plants. Natural skin tones, real-looking people, shallow depth of field, cinematic lighting, high detail, 8k. No text, no logos, no watermarks, no distorted hands or faces.

## Slots

| Slot | Filename | Size (ratio) | Prompt |
|---|---|---|---|
| Hero | `hero.jpg` | 1600×1280 (5:4) | A small, diverse team of young Indian software professionals collaborating around a large wall display showing a colourful analytics dashboard and app screens. One person points at the screen while the others discuss with laptops open. Evening light, city lights visible through floor-to-ceiling windows, blue screen glow on their faces. Wide shot, the subject slightly right of centre. |
| Custom CRM | `crm.jpg` | 1600×1000 (16:10) | A sales manager and a colleague review a customer pipeline on a large monitor showing kanban columns and customer cards, with a coffee cup and notebook on the desk. A focused, friendly mood. |
| Loyalty & Rewards | `loyalty.jpg` | 1600×1000 (16:10) | A smiling shopper at a modern supermarket checkout scans a loyalty QR code on their phone, and a reward notification glows on the screen. Bright aisles are softly blurred behind them. |
| Order Management | `orders.jpg` | 1600×1000 (16:10) | A warehouse team member holds a tablet showing an order list beside neatly stacked labelled parcels and shelving. A clean, modern fulfilment centre with cool blue accent lighting. |
| Distribution / Van Sales | `van-sales.jpg` | 1600×1000 (16:10) | A field sales representative takes an order on a smartphone beside a white delivery van outside a neighbourhood grocery store in Kerala, in golden-hour light. |
| Business Analytics | `analytics.jpg` | 1600×1000 (16:10) | A business owner at a desk studies glowing KPI charts and graphs on a laptop and second monitor. Over-the-shoulder view, charts in blue and cyan, a premium minimal workspace. |
| AI Business Automation | `ai-automation.jpg` | 1600×1000 (16:10) | An abstract yet realistic scene: a professional's hand interacts with a translucent holographic interface of connected workflow nodes and chat bubbles above a laptop, in violet and electric-blue light. Futuristic and clean, not cluttered. |

## Tips

- Generate 3 or 4 options per slot and pick the one with the cleanest faces and hands.
- Keep the main subject away from the edges, because the frames have rounded corners and are cropped on phones.
- Use the same tool and style settings for all seven images so they look like one set.
