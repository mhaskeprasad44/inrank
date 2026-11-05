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

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$website = trim($data['website'] ?? '');
$services = trim($data['services_needed'] ?? $data['service'] ?? 'General Consultation');
$budget = trim($data['budget_range'] ?? $data['budget'] ?? 'Not specified');
$message = trim($data['message'] ?? $data['project_details'] ?? '');
$source = trim($data['source'] ?? 'Website Inquiry');

if (empty($name) || (empty($email) && empty($phone))) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Name and phone or email are required."]);
    exit;
}

$to = "inranktech@gmail.com";
$subject = "New Inquiry: " . $name . " (" . $services . ")";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$serverDomain = $_SERVER['SERVER_NAME'] ?? 'inranktech.com';
$headers .= "From: Inrank Inquiries <noreply@" . $serverDomain . ">\r\n";
if (!empty($email)) {
    $headers .= "Reply-To: " . $email . "\r\n";
}

$htmlBody = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px; margin: 0;'>
  <div style='max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;'>
    <div style='background: linear-gradient(135deg, #049649 0%, #009d49 100%); color: #ffffff; padding: 24px; text-align: left;'>
      <h2 style='margin: 0; font-size: 20px;'>INRANK TECHNOLOGIES</h2>
      <p style='margin: 4px 0 0; font-size: 13px; opacity: 0.9;'>New Customer Form Submission</p>
    </div>
    <div style='padding: 24px; color: #0f172a;'>
      <table style='width: 100%; border-collapse: collapse; font-size: 14px;'>
        <tr><td style='padding: 8px 0; color: #64748b; font-weight: 600; width: 140px;'>Name:</td><td style='padding: 8px 0; font-weight: 700;'>" . htmlspecialchars($name) . "</td></tr>
        <tr><td style='padding: 8px 0; color: #64748b; font-weight: 600;'>Phone:</td><td style='padding: 8px 0; font-weight: 700; color: #009d49;'>" . htmlspecialchars($phone) . "</td></tr>
        <tr><td style='padding: 8px 0; color: #64748b; font-weight: 600;'>Email:</td><td style='padding: 8px 0;'>" . htmlspecialchars($email) . "</td></tr>
        <tr><td style='padding: 8px 0; color: #64748b; font-weight: 600;'>Website:</td><td style='padding: 8px 0;'>" . htmlspecialchars($website) . "</td></tr>
        <tr><td style='padding: 8px 0; color: #64748b; font-weight: 600;'>Services:</td><td style='padding: 8px 0;'>" . htmlspecialchars($services) . "</td></tr>
        <tr><td style='padding: 8px 0; color: #64748b; font-weight: 600;'>Budget:</td><td style='padding: 8px 0;'>" . htmlspecialchars($budget) . "</td></tr>
        <tr><td style='padding: 8px 0; color: #64748b; font-weight: 600;'>Source:</td><td style='padding: 8px 0;'>" . htmlspecialchars($source) . "</td></tr>
      </table>
      <div style='margin-top: 18px; padding: 14px; background: #f8fafc; border-left: 4px solid #009d49; border-radius: 6px;'>
        <p style='margin: 0 0 6px; font-size: 11px; font-weight: bold; color: #64748b; text-transform: uppercase;'>Message / Details:</p>
        <p style='margin: 0; font-size: 13.5px; line-height: 1.5; color: #1e293b;'>" . nl2br(htmlspecialchars($message)) . "</p>
      </div>
    </div>
    <div style='background: #f8fafc; padding: 12px 24px; border-top: 1px solid #e2e8f0; font-size: 11.5px; color: #94a3b8; text-align: center;'>
      Dispatched to inranktech@gmail.com &bull; Inrank Technologies Web Engine
    </div>
  </div>
</body>
</html>
";

$mailSent = @mail($to, $subject, $htmlBody, $headers);

// Failsafe Lead File Logger on Server
$logLine = date('c') . " | Lead: " . $name . " | Phone: " . $phone . " | Email: " . $email . " | MailSent: " . ($mailSent ? 'YES' : 'NO') . "\n";
@file_put_contents(__DIR__ . '/leads.log', $logLine, FILE_APPEND);

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
