@messages.each do |message|
  json.set! message.id do
    json.partial! 'messages', message: message
  end
end