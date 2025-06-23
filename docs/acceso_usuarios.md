# Políticas de Acceso a Usuarios

Se definen tres roles:

## 1. Líder del Proyecto
- Acceso total.
- Puede hacer `push` directo a `main` y `release`.
- Aprueba PRs y realiza merges.

## 2. Desarrollador
- Crea ramas `feature/` o `bugfix/`.
- Trabaja siempre con Pull Requests.
- Necesita aprobación para hacer merge a `main`.

## 3. Colaborador Externo
- Sólo puede trabajar en forks o ramas asignadas.
- Siempre debe generar un Pull Request.
- Su código necesita 2 aprobaciones antes del merge.

## Ramas Protegidas
- `main` y `release/*` están protegidas.
- Solo el líder del proyecto puede hacer push directo.
