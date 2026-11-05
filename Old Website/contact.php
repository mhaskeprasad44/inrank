<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

// Support both JSON payload and standard application/x-www-form-urlencoded
$input = file_get_contents('php://input');
$data = json_decode($input, true);
if (!$data || !is_array($data)) {
    $data = $_POST;
}

$name = trim($data['name'] ?? $data['leadName'] ?? '');
$email = trim($data['email'] ?? $data['leadEmail'] ?? '');
$phone = trim($data['phone'] ?? $data['leadPhone'] ?? '');
$website = trim($data['website'] ?? $data['websiteUrl'] ?? $data['url'] ?? '');
$services = trim($data['services_needed'] ?? $data['service'] ?? 'General Consultation');
$budget = trim($data['budget_range'] ?? $data['budget'] ?? $data['package'] ?? 'Not specified');
$message = trim($data['message'] ?? $data['project_details'] ?? '');
$source = trim($data['source'] ?? 'Website Inquiry Form');

if (empty($name) || (empty($email) && empty($phone))) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Name and phone or email are required."]);
    exit;
}

$to = "inranktech@gmail.com";
$rawSubject = "New Inrank Lead: " . $name . " (" . $services . ")";
$encodedSubject = "=?UTF-8?B?" . base64_encode($rawSubject) . "?=";

$serverDomain = "inranktech.com";
$fromEmail = "noreply@" . $serverDomain;

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Inrank Inquiries <" . $fromEmail . ">\r\n";
$headers .= "Reply-To: " . (!empty($email) ? $email : $fromEmail) . "\r\n";
$headers .= "Return-Path: <" . $fromEmail . ">\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "X-Priority: 1 (Highest)\r\n";

$istTime = date('d M Y, h:i A') . ' IST';

$htmlBody = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; padding: 25px; margin: 0;'>
  <div style='max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);'>
    <div style='background: #009d49; color: #ffffff; padding: 26px 28px;'>
      <div style='font-size: 11px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; opacity: 0.85;'>INRANK TECHNOLOGIES</div>
      <h2 style='margin: 4px 0 0; font-size: 22px; font-weight: 700; color: #ffffff;'>New Inbound Customer Inquiry</h2>
    </div>
    <div style='padding: 28px; color: #0f172a;'>
      <table style='width: 100%; border-collapse: collapse; font-size: 14px;'>
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600; width: 140px;'>Customer Name:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #0f172a;'>" . htmlspecialchars($name) . "</td>
        </tr>
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;'>WhatsApp / Phone:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #009d49; font-family: monospace; font-size: 15px;'>" . htmlspecialchars($phone) . "</td>
        </tr>
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;'>Email Address:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;'><a href='mailto:" . htmlspecialchars($email) . "' style='color: #009d49; text-decoration: none; font-weight: 600;'>" . htmlspecialchars($email) . "</a></td>
        </tr>
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;'>Website URL:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;'>" . (!empty($website) ? "<a href='" . htmlspecialchars($website) . "' target='_blank' style='color: #0284c7;'>" . htmlspecialchars($website) . "</a>" : "None provided") . "</td>
        </tr>
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;'>Services Needed:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;'>" . htmlspecialchars($services) . "</td>
        </tr>
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;'>Budget Range:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;'>" . htmlspecialchars($budget) . "</td>
        </tr>
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;'>Source:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;'>" . htmlspecialchars($source) . "</td>
        </tr>
      </table>
      " . (!empty($message) ? "
      <div style='margin-top: 22px; padding: 16px 18px; background: #f8fafc; border-radius: 10px; border-left: 4px solid #009d49;'>
        <p style='margin: 0 0 6px; font-size: 11.5px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;'>Project Details / Requirements:</p>
        <p style='margin: 0; font-size: 13.5px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;'>" . nl2br(htmlspecialchars($message)) . "</p>
      </div>
      " : "") . "
    </div>
    <div style='background: #f8fafc; padding: 14px 24px; border-top: 1px solid #e2e8f0; font-size: 11.5px; color: #94a3b8; text-align: center;'>
      Received on " . $istTime . " &bull; Inrank Technologies Web Engine (Baner, Pune)
    </div>
  </div>
</body>
</html>
";

$mailSent = @mail($to, $encodedSubject, $htmlBody, $headers, "-f" . $fromEmail);

// Failsafe Lead File Logger on Server
$logLine = date('c') . " | Lead: " . $name . " | Phone: " . $phone . " | Email: " . $email . " | MailSent: " . ($mailSent ? 'YES' : 'NO') . "\n";
@file_put_contents(__DIR__ . '/leads.log', $logLine, FILE_APPEND);

// Also append to leads.json
$jsonEntry = [
    "timestamp" => date('c'),
    "name" => $name,
    "phone" => $phone,
    "email" => $email,
    "website" => $website,
    "services" => $services,
    "budget" => $budget,
    "message" => $message,
    "mailSent" => $mailSent
];
$jsonFile = __DIR__ . '/leads.json';
$existing = [];
if (file_exists($jsonFile)) {
    $existing = json_decode(@file_get_contents($jsonFile), true) ?: [];
}
$existing[] = $jsonEntry;
@file_put_contents($jsonFile, json_encode($existing, JSON_PRETTY_PRINT));

// If submitted as traditional HTML form from browser
if (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'text/html') !== false && !isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
    header("Location: /contact.html?submitted=true#consult-form");
    exit;
}

header('Content-Type: application/json');
echo json_encode([
    "success" => true,
    "mailSent" => $mailSent,
    "message" => "Your inquiry was transmitted to inranktech@gmail.com"
]);
