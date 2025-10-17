import db from './connectdb.js';

export async function logAudit(userId, action, entity, entityId, oldValue, newValue) {
  await db('audit_logs').insert({
    user_id: userId,
    action,
    entity,
    entity_id: entityId,
    old_value: oldValue,
    new_value: newValue,
  });
}
