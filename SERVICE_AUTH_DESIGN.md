# Service-to-Service Authentication Design

## Overview

Maitask platform uses HMAC-based authentication for secure service-to-service communication. This approach provides robust security without the complexity overhead of certificate-based systems.

## Architecture

```text
Plane ← Engine
├─ Header: X-Service-ID: engine-instance-1
├─ Header: X-Timestamp: 1699264800
├─ Header: X-Signature: HMAC-SHA256(secret, service_id + timestamp + request_body)
└─ Body: { ... }

Plane validates:
1. Service ID is registered
2. Timestamp is within 5 minutes
3. Signature matches expected HMAC
```

## Implementation

### Configuration

**Plane (.env)**:

```bash
SERVICE_AUTH_ENABLED=true
SERVICE_SECRETS=engine:your-secure-secret-key-here,scheduler:another-secret-key
```

**Engine (.env)**:

```bash
SERVICE_ID=engine
SERVICE_SECRET=your-secure-secret-key-here
```

### Security Features

- **HMAC-SHA256**: Cryptographic signature prevents request tampering
- **Timestamp Validation**: 5-minute window prevents replay attacks
- **Constant-time Comparison**: Prevents timing attacks
- **Service Registration**: Only registered services can authenticate
- **Comprehensive Logging**: All authentication events are logged

### Authentication Flow

1. **Request Signing**: Engine generates HMAC signature using shared secret
2. **Header Injection**: Authentication headers added to all requests
3. **Signature Validation**: Plane verifies signature using registered secret
4. **Timestamp Check**: Ensures request freshness
5. **Service Authorization**: Confirms service ID is registered

## Security Best Practices

### Secret Management

1. **Secret Length**: Minimum 32 bytes (256 bits)
2. **Secret Generation**: Use cryptographically secure random
3. **Secret Rotation**: Rotate every 90 days
4. **Secret Storage**: Environment variables only, never in code
5. **Transport Security**: Always use HTTPS

### Operational Security

1. **Timestamp Window**: 5 minutes maximum for clock skew tolerance
2. **Service Registration**: Maintain accurate service registry
3. **Monitoring**: Track authentication failures and unusual patterns
4. **Access Control**: Limit who can view and modify secrets

## Monitoring & Alerting

### Key Metrics

- Authentication success/failure rate
- Signature validation time
- Timestamp drift patterns
- Service authentication distribution

### Alert Conditions

- High authentication failure rate (>5% in 5 minutes)
- Large timestamp drift (>1 minute)
- Unknown service ID attempts
- Repeated signature failures

---

**Author**: Maitask Team
**Version**: 1.0
