const fs = require('fs');

const phpCode = `<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Support both JSON payload and standard form-urlencoded / multipart
$rawInput = file_get_contents('php://input');
$jsonData = json_decode($rawInput, true);
$data = is_array($jsonData) ? $jsonData : $_POST;

$name = htmlspecialchars(trim($data['Client_Name'] ?? $data['Full_Name'] ?? $data['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars(trim($data['Company'] ?? $data['company'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars(trim($data['Phone_WhatsApp'] ?? $data['Phone'] ?? $data['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars(trim($data['Email'] ?? $data['email'] ?? ''), ENT_QUOTES, 'UTF-8');
$city = htmlspecialchars(trim($data['City_Location'] ?? $data['city'] ?? $data['location'] ?? 'India'), ENT_QUOTES, 'UTF-8');
$machine = htmlspecialchars(trim($data['Machine_Model'] ?? $data['Machine_Category'] ?? $data['machine'] ?? $data['machine_interest'] ?? 'General CNC Inquiry'), ENT_QUOTES, 'UTF-8');
$material = htmlspecialchars(trim($data['Workpiece_Material'] ?? $data['material'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$tolerance = htmlspecialchars(trim($data['Required_Tolerance'] ?? $data['tolerance'] ?? 'Standard'), ENT_QUOTES, 'UTF-8');
$timeline = htmlspecialchars(trim($data['Project_Timeline'] ?? $data['timeline'] ?? 'Standard'), ENT_QUOTES, 'UTF-8');
$notes = htmlspecialchars(trim($data['Application_Notes'] ?? $data['Detailed_Requirements'] ?? $data['notes'] ?? $data['message'] ?? $data['details'] ?? ''), ENT_QUOTES, 'UTF-8');
$source = htmlspecialchars(trim($data['Source'] ?? $data['source'] ?? 'CyTOS Website Portal'), ENT_QUOTES, 'UTF-8');

if (empty($name) || (empty($phone) && empty($email))) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name and Phone or Email are required']);
    exit;
}

$to = 'cytospune@gmail.com';
$cc = 'inranktech@gmail.com';
$subject = 'New CyTOS Lead: ' . $machine . ' from ' . ($company !== 'N/A' ? $company : $name);

$htmlBody = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>New Technical RFQ</title></head>' .
'<body style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px; color: #1e293b;">' .
'<div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">' .
'<div style="background: #d97706; padding: 18px 24px; color: #ffffff;">' .
'<h2 style="margin: 0; font-size: 20px;">New CyTOS Technical RFQ Inquiry</h2>' .
'<p style="margin: 4px 0 0; font-size: 13px; opacity: 0.9;">Origin: ' . $source . '</p>' .
'</div>' .
'<div style="padding: 24px;">' .
'<table style="width: 100%; border-collapse: collapse; font-size: 14px;">' .
'<tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; width: 35%; color: #64748b; font-weight: bold;">Client Name</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0f172a;">' . $name . '</td></tr>' .
'<tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">Company</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">' . $company . '</td></tr>' .
'<tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">Phone / WhatsApp</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #d97706; font-weight: bold;"><a href="tel:' . $phone . '" style="color: #d97706;">' . $phone . '</a></td></tr>' .
'<tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">Email Address</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:' . $email . '">' . $email . '</a></td></tr>' .
'<tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">Location / City</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">' . $city . '</td></tr>' .
'<tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">Machine of Interest</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #b45309;">' . $machine . '</td></tr>' .
'<tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">Workpiece Material</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">' . $material . '</td></tr>' .
'<tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">Target Tolerance</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">' . $tolerance . '</td></tr>' .
'<tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">Procurement Timeline</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">' . $timeline . '</td></tr>' .
'<tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;">Technical Notes</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">' . nl2br($notes) . '</td></tr>' .
'</table>' .
'</div>' .
'<div style="background: #f1f5f9; padding: 12px 24px; font-size: 12px; color: #64748b; text-align: center;">' .
'CyTOS Machines & SPM Turnkey Automation - Bhosari MIDC, Pune - <a href="https://www.cytos.in" style="color: #d97706;">www.cytos.in</a>' .
'</div>' .
'</div></body></html>';

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: CyTOS Website Inquiry <noreply@cytos.in>';
if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
}
$headers[] = 'Cc: ' . $cc;
$headers[] = 'X-Mailer: PHP/' . phpversion();

$mailSent = @mail($to, $subject, $htmlBody, implode("\r\n", $headers));

echo json_encode([
    'success' => true,
    'mail_sent' => $mailSent,
    'message' => 'Inquiry registered and dispatched successfully'
]);
`;

fs.writeFileSync('../cytos/public/api/contact.php', phpCode, 'utf8');
console.log('Created ../cytos/public/api/contact.php successfully');
