import { NextRequest, NextResponse } from "next/server";

function generateConfirmationNumber(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "BB";
  for (let i = 0; i < 6; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      first_name,
      last_name,
      email,
      phone,
      date,
      time,
      party_size,
      special_occasion,
      message,
    } = body;

    if (!first_name || !last_name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    const confirmationNumber = generateConfirmationNumber();

    // Save to Supabase if configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey && supabaseUrl !== "your_supabase_url") {
      try {
        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(supabaseUrl, supabaseKey);
        await supabase.from("reservations").insert({
          confirmation_number: confirmationNumber,
          first_name,
          last_name,
          email,
          phone,
          date,
          time,
          party_size: Number(party_size),
          special_occasion: special_occasion || null,
          message: message || null,
          status: "pending",
        });
      } catch {
        // Continue even if Supabase insert fails
      }
    }

    // Send email via Resend if configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && resendKey !== "your_resend_api_key") {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendKey);

        await resend.emails.send({
          from: "Le Bœuf & Bière <reservations@leboeufetbiere.ca>",
          to: [email],
          subject: `Confirmation de réservation #${confirmationNumber} — Le Bœuf & Bière`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
              <div style="background: #2C1810; padding: 32px; text-align: center;">
                <h1 style="color: #C9A84C; margin: 0; font-size: 28px;">Le Bœuf & Bière</h1>
                <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-family: sans-serif; font-size: 14px;">
                  Brasserie artisanale · Trois-Rivières
                </p>
              </div>
              <div style="padding: 40px 32px; background: #FAFAF7;">
                <h2 style="color: #2C1810; margin-top: 0;">Votre réservation est confirmée !</h2>
                <p style="color: #6B6B6B; font-family: sans-serif;">
                  Bonjour ${first_name}, nous avons bien reçu votre demande de réservation.
                </p>
                <div style="background: white; border-radius: 8px; padding: 24px; margin: 24px 0; border-left: 4px solid #C9A84C;">
                  <table style="width: 100%; font-family: sans-serif; font-size: 14px;">
                    <tr>
                      <td style="color: #6B6B6B; padding: 6px 0;">N° de confirmation</td>
                      <td style="font-weight: bold; text-align: right; font-family: monospace;">#${confirmationNumber}</td>
                    </tr>
                    <tr>
                      <td style="color: #6B6B6B; padding: 6px 0;">Date</td>
                      <td style="font-weight: bold; text-align: right;">${date}</td>
                    </tr>
                    <tr>
                      <td style="color: #6B6B6B; padding: 6px 0;">Heure</td>
                      <td style="font-weight: bold; text-align: right;">${time}</td>
                    </tr>
                    <tr>
                      <td style="color: #6B6B6B; padding: 6px 0;">Personnes</td>
                      <td style="font-weight: bold; text-align: right;">${party_size}</td>
                    </tr>
                  </table>
                </div>
                <p style="font-family: sans-serif; font-size: 13px; color: #6B6B6B;">
                  Pour modifier ou annuler, appelez-nous au <strong>(819) 555-0123</strong> ou
                  répondez à cet email.
                </p>
                <p style="font-family: sans-serif; font-size: 13px; color: #6B6B6B;">
                  📍 1234 rue des Forges, Trois-Rivières, QC G9A 2G4
                </p>
              </div>
              <div style="background: #2C1810; padding: 20px 32px; text-align: center;">
                <p style="color: rgba(255,255,255,0.4); font-family: sans-serif; font-size: 12px; margin: 0;">
                  © Le Bœuf & Bière — À bientôt à notre table !
                </p>
              </div>
            </div>
          `,
        });
      } catch {
        // Email sending is best-effort
      }
    }

    return NextResponse.json({ confirmationNumber, success: true });
  } catch {
    return NextResponse.json(
      { error: "Une erreur interne est survenue" },
      { status: 500 }
    );
  }
}
